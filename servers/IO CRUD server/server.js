import express from "express";
import { promises as fs } from "fs";

const app = express();
app.use(express.json());

const PORT = 3000;
const FILE_NAME = "output.json";

async function readDb() {
  const raw = await fs.readFile(FILE_NAME, "utf8");
  return JSON.parse(raw); 
}

async function writeDb(db) {
  await fs.writeFile(FILE_NAME, JSON.stringify(db), "utf8");
}

app.post("/items", async (req, res) => {
  const data = req.body;
  if (!data) {
    return res.status(400).json({ error: "No content provided" });
  }

  const db = await readDb();

  const newItem = {
    id: Date.now().toString(),
    ...data,
  };

  db.items.push(newItem);
  await writeDb(db);

  res.status(201).json({ item: newItem });
});

app.get("/items", async (req, res) => {
  const db = await readDb();
  res.json({ items: db.items });
});

app.get("/items/:id", async (req, res) => {
  const db = await readDb();
  const item = db.items.find((x) => x.id === req.params.id);
  if (!item) return res.status(404).json({ error: "Not found" });
  res.json({ item });
});

app.put("/items/:id", async (req, res) => {
  const db = await readDb();

  for (let item of db.items) {
    if (item.id === req.params.id) {
      item.name = req.body.name;
      item.age = req.body.age;

      await writeDb(db);
      return res.json(item);
    }
  }

  res.status(404).json({ error: "Not found" });
});


app.delete("/items/:id", async (req, res) => {
  const db = await readDb();
  const before = db.items.length;

  db.items = db.items.filter((x) => x.id !== req.params.id);

  if (db.items.length === before) {
    return res.status(404).json({ error: "Not found" });
  }

  await writeDb(db);
  res.json({ msg: "deleted", id: req.params.id });
});

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
