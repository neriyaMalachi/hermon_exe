import express from "express";
import "dotenv/config";
import studentsRouter from "./routes/students.js";
import { initDb } from "./db.js";

const app = express();
app.use(express.json());

await initDb();

app.use("/students", studentsRouter);

app.get("/health", (req, res) => res.json({ ok: true }));

app.listen(process.env.PORT, () => console.log("Server running on", process.env.PORT));
