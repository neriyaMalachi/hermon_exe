import { pool } from "./pool.js";

export async function initUsersTable() {
  await pool.query(`
    CREATE TABLE IF NOT EXISTS users (
      id INT AUTO_INCREMENT PRIMARY KEY,
      username VARCHAR(50) UNIQUE NOT NULL,
      password VARCHAR(255) NOT NULL
    )
  `);
}

export async function getAllUsers() {
  const [rows] = await pool.query(
    "SELECT id, username FROM users"
  );
  return rows;
}


export async function createUser(username, password) {
  const [result] = await pool.execute(
    "INSERT INTO users (username, password) VALUES (?, ?)",
    [username, password]
  );
  return { id: result.insertId, username };
}

export async function findUser(username) {
  const [rows] = await pool.execute(
    "SELECT * FROM users WHERE username = ? LIMIT 1",
    [username]
  );
  return rows[0] || null;
}

export async function deleteUser(username) {
  const [result] = await pool.execute(
    "DELETE FROM users WHERE username = ?",
    [username]
  );
  return { deleted: result.affectedRows };
}
