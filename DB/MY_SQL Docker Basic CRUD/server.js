import express from "express";
import "dotenv/config";
import { initUsersTable, createUser, findUser, deleteUser, getAllUsers } from "./db/users.repo.js";

const app = express();
app.use(express.json());

// בודק חיבור ל-DB + יוצר טבלה
app.get("/health", async (req, res) => {
  await initUsersTable();
  res.json({ ok: true, msg: "DB connected + users table ready" });
});

// register
app.post("/users", async (req, res) => {
  const { username, password } = req.body;
  if (!username || !password) return res.status(400).json({ error: "missing fields" });

  const user = await createUser(username, password);
  res.json(user);
});

// login (בסיסי)
app.post("/login", async (req, res) => {
  const { username, password } = req.body;
  
  if (!username || !password) return res.status(400).json({ error: "missing fields" });

  const user = await findUser(username);
  if (!user) return res.status(401).json({ error: "bad credentials" });

  if (user.password != password) return res.status(401).json({ error: "bad credentials" });

  res.json({ ok: true, msg: "logged in" });
});

// get all users
app.get("/users", async (req, res) => {
  const users = await getAllUsers();
  res.json(users);
});


// delete
app.delete("/users/:username", async (req, res) => {
  const result = await deleteUser(req.params.username);
  if (result.deleted === 0) return res.status(404).json({ error: "not found" });
  res.json({ ok: true });
});

app.listen(process.env.PORT, () => {
  console.log("Server running on", process.env.PORT);
});
