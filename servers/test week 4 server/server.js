import express from "express";
import fs from "fs/promises";
import path from "path";
import { fileURLToPath } from "url";

const app = express();
app.use(express.json());

const PORT = process.env.PORT || 8000;

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const DATA_DIR = path.join(__dirname, "data");
const USERS_PATH = path.join(DATA_DIR, "users.json");
const EVENTS_PATH = path.join(DATA_DIR, "events.json");
const RECEIPTS_PATH = path.join(DATA_DIR, "receipts.json");

// -------------------- File I/O Helpers --------------------
async function ensureFile(filePath) {
  try {
    await fs.access(filePath);
  } catch {
    await fs.mkdir(path.dirname(filePath), { recursive: true });
    await fs.writeFile(filePath, "[]", "utf-8");
  }
}

async function readJson(filePath) {
  await ensureFile(filePath);
  const content = await fs.readFile(filePath, "utf-8");
  const trimmed = content.trim();
  if (!trimmed) return [];
  try {
    const parsed = JSON.parse(trimmed);
    return Array.isArray(parsed) ? parsed : [];
  } catch {
    return [];
  }
}

async function writeJson(filePath, data) {
  await ensureFile(filePath);
  await fs.writeFile(filePath, JSON.stringify(data, null, 2), "utf-8");
}

// -------------------- Auth Helper (POST/PUT only) --------------------
async function requireAuth(username, password) {
  if (!username || !password) {
    return { ok: false, status: 400, error: "username and password are required" };
  }
  const users = await readJson(USERS_PATH);
  const user = users.find((u) => u.username === username && u.password === password);
  if (!user) {
    return { ok: false, status: 401, error: "invalid username or password" };
  }
  return { ok: true, user };
}

app.get("/", (req, res) => {
  res.json({ msg: "hello" });
});

// 1) Register
app.post("/register", async (req, res) => {
  try {
    const { username, password } = req.body || {};

    if (!username || !password) {
      return res.status(400).json({ error: "username and password are required" });
    }

    const users = await readJson(USERS_PATH);

    const exists = users.find((u) => u.username === username);
    if (exists) {
      return res.status(400).json({ error: "the user is already exist" });
    }

    users.push({ username, password });
    await writeJson(USERS_PATH, users);

    return res.status(201).json({ message: "User registered successfully" });
  } catch (err) {
    return res.status(500).json({ error: "server error" });
  }
});

// 2) Create Event
app.post("/events", async (req, res) => {
  try {
    const { eventName, ticketsForSale, username, password } = req.body || {};

    const auth = await requireAuth(username, password);
    if (!auth.ok) return res.status(auth.status).json({ error: auth.error });

    if (!eventName || typeof eventName !== "string") {
      return res.status(400).json({ error: "eventName is required" });
    }
    const n = Number(ticketsForSale);
    if (!Number.isFinite(n) || n <= 0) {
      return res.status(400).json({ error: "ticketsForSale must be a positive number" });
    }

    const events = await readJson(EVENTS_PATH);

    // (לא חובה במפרט) מניעת אירוע כפול בשם (case-insensitive)
    const already = events.find(
      (e) => String(e.eventName).toLowerCase() === eventName.toLowerCase()
    );
    if (already) {
      return res.status(400).json({ error: "event already exists" });
    }

    const newEvent = {
      eventName,
      ticketsAvailable: n,      // לפי המפרט: ticketsAvailable
      createdBy: username,      // לפי המפרט
    };

    events.push(newEvent);
    await writeJson(EVENTS_PATH, events);

    return res.status(201).json({ message: "Event created successfully" });
  } catch (err) {
    return res.status(500).json({ error: "server error" });
  }
});

// 3) Buy Tickets
app.post("/tickets/buy", async (req, res) => {
  try {
    const { username, password, eventName, quantity } = req.body || {};

    const auth = await requireAuth(username, password);
    if (!auth.ok) return res.status(auth.status).json({ error: auth.error });

    if (!eventName || typeof eventName !== "string") {
      return res.status(400).json({ error: "eventName is required" });
    }

    const q = Number(quantity);
    if (!Number.isFinite(q) || q <= 0) {
      return res.status(400).json({ error: "quantity must be a positive number" });
    }

    const events = await readJson(EVENTS_PATH);

    const idx = events.findIndex(
      (e) => String(e.eventName).toLowerCase() === eventName.toLowerCase()
    );
    if (idx === -1) {
      return res.status(404).json({ error: "event not found" });
    }

    const foundEvent = events[idx];
    const available = Number(foundEvent.ticketsAvailable) || 0;

    if (available < q) {
      return res.status(400).json({ error: "not enough tickets available" });
    }

    // update tickets
    foundEvent.ticketsAvailable = available - q;
    events[idx] = foundEvent;

    // create receipt
    const receipts = await readJson(RECEIPTS_PATH);
    const receipt = {
      username,
      eventName: foundEvent.eventName, // נשמור את השם המקורי מה-db
      ticketsBought: q,
    };
    receipts.push(receipt);

    // persist
    await writeJson(EVENTS_PATH, events);
    await writeJson(RECEIPTS_PATH, receipts);

    return res.status(201).json({ message: "Tickets purchased successfully" });
  } catch (err) {
    return res.status(500).json({ error: "server error" });
  }
});

// 4) User Purchase Summary
app.get("/users/:username/summary", async (req, res) => {
  try {
    const { username } = req.params;

    const receipts = await readJson(RECEIPTS_PATH);
    const userReceipts = receipts.filter((r) => r.username === username);

    if (userReceipts.length === 0) {
      return res.json({
        totalTicketsBought: 0,
        events: [],
        averageTicketsPerEvent: 0,
      });
    }

    let totalTicketsBought = 0;
    const eventSet = new Set();
    const ticketsPerEvent = new Map(); // eventName -> tickets sum

    for (const r of userReceipts) {
      const t = Number(r.ticketsBought) || 0;
      totalTicketsBought += t;

      const eName = String(r.eventName);
      eventSet.add(eName);

      ticketsPerEvent.set(eName, (ticketsPerEvent.get(eName) || 0) + t);
    }

    const uniqueEvents = Array.from(eventSet);
    const avg =
      uniqueEvents.length === 0 ? 0 : totalTicketsBought / uniqueEvents.length;

    return res.json({
      totalTicketsBought,
      events: uniqueEvents,
      averageTicketsPerEvent: avg,
    });
  } catch (err) {
    return res.status(500).json({ error: "server error" });
  }
});

app.listen(PORT, () => {
  console.log(`server running on port ${PORT}...`);
});
