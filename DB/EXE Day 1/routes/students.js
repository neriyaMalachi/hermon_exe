import { Router } from "express";
import { pool } from "../db.js";

const router = Router();

const mapRow = (r) => ({ id: r.id, name: r.name, age: r.age, className: r.class_name });
const validAge = (age) => typeof age === "number" && Number.isFinite(age);

router.post("/", async (req, res) => {
  const { name, age, className } = req.body;
  if (!name || age === undefined || className === undefined) return res.status(400).json({ error: "MISSING_FIELDS" });
  if (!validAge(age)) return res.status(400).json({ error: "AGE_NOT_A_NUMBER" });

  const [result] = await pool.execute(
    "INSERT INTO students (name, age, class_name) VALUES (?, ?, ?)",
    [name, age, className]
  );

  res.status(201).json({ id: result.insertId, name, age, className });
});

router.get("/", async (req, res) => {
  const { className } = req.query;

  let rows;
  if (className) {
    const [filtered] = await pool.execute(
      "SELECT id, name, age, class_name FROM students WHERE class_name = ?",
      [String(className)]
    );
    rows = filtered;
  } else {
    const [all] = await pool.query("SELECT id, name, age, class_name FROM students");
    rows = all;
  }

  const students = rows.map(mapRow);
  res.json({ count: students.length, students });
});

router.get("/:id", async (req, res) => {
  const id = Number(req.params.id);
  if (!Number.isInteger(id)) return res.status(400).json({ error: "INVALID_ID" });

  const [rows] = await pool.execute(
    "SELECT id, name, age, class_name FROM students WHERE id = ? LIMIT 1",
    [id]
  );

  if (rows.length === 0) return res.status(404).json({ error: "STUDENT_NOT_FOUND" });
  res.json(mapRow(rows[0]));
});

router.put("/:id", async (req, res) => {
  const id = Number(req.params.id);
  if (!Number.isInteger(id)) return res.status(400).json({ error: "INVALID_ID" });

  const { name, age, className } = req.body;
  if (!name || age === undefined || className === undefined) return res.status(400).json({ error: "INVALID_BODY" });
  if (!validAge(age)) return res.status(400).json({ error: "AGE_NOT_A_NUMBER" });

  const [result] = await pool.execute(
    "UPDATE students SET name = ?, age = ?, class_name = ? WHERE id = ?",
    [name, age, className, id]
  );

  if (result.affectedRows === 0) return res.status(404).json({ error: "STUDENT_NOT_FOUND" });
  res.json({ id, name, age, className });
});

router.delete("/:id", async (req, res) => {
  const id = Number(req.params.id);
  if (!Number.isInteger(id)) return res.status(400).json({ error: "INVALID_ID" });

  const [result] = await pool.execute("DELETE FROM students WHERE id = ?", [id]);
  if (result.affectedRows === 0) return res.status(404).json({ error: "STUDENT_NOT_FOUND" });

  res.json({ message: "Student deleted" });
});

export default router;
