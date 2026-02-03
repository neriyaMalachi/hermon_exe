import express from "express";
import jwt from "jsonwebtoken";
import bcrypt from "bcryptjs";

const app = express();
app.use(express.json());

const PORT = process.env.PORT || 8000;
const SECRET = process.env.JWT_SECRET || "dev_secret";

const users = [
  {
    username: "dana",
    passwordHash: bcrypt.hashSync("1234", 10),
    role: "student",
  },
  {
    username: "lior",
    passwordHash: bcrypt.hashSync("1234", 10),
    role: "teacher",
  },
  {
    username: "admin",
    passwordHash: bcrypt.hashSync("1234", 10),
    role: "admin",
  },
];

app.post("/login", async (req, res) => {
  const { username, password } = req.body;

  if (!username || !password) {
    return res.status(400).json({ error: "Missing username or password" });
  }

  // חיפוש משתמש
  const user = users.find((u) => u.username === username);
  if (!user) {
    return res.status(401).json({ error: "Invalid credentials" });
  }
  console.log(password, user.passwordHash);
  const isMatch = await bcrypt.compare(password, user.passwordHash);

  if (!isMatch) {
    return res.status(401).json({ error: "Invalid credentials" });
  }

  // יוצרים טוקן (לא שמים סיסמה בטוקן!)
  const token = jwt.sign({ username: user.username, role: user.role }, SECRET, {
    expiresIn: "2h",
  });

  res.json({ message: "Logged in", token });
});

function getToken(req) {
  const auth = req.headers.authorization;

  if (!auth) return null;

  if (!auth.startsWith("Bearer ")) return null;

  console.log(auth.slice("Bearer ".length));
  return auth.slice("Bearer ".length);
}

app.get("/profile", (req, res) => {
  const token = getToken(req);
  if (!token) return res.status(401).json({ error: "No token" });

  try {
    const data = jwt.verify(token, SECRET); // בודק חתימה + תוקף
    console.log(data);

    res.json({ message: "Welcome!", user: data });
  } catch {
    res.status(401).json({ error: "Invalid/expired token" });
  }
});
ש;

app.post("/add-student", (req, res) => {
  const token = getToken(req);
  if (!token) return res.status(401).json({ error: "No token" });

  try {
    const data = jwt.verify(token, SECRET); // {username, role, iat, exp}

    // Authorization: בדיקת role
    if (data.role !== "teacher" && data.role !== "admin") {
      return res.status(403).json({ error: "Forbidden: not allowed" });
    }

    // פעולה (דמו)
    const { studentName } = req.body;
    if (!studentName)
      return res.status(400).json({ error: "studentName required" });

    res.json({ message: "Student added", by: data.username, studentName });
  } catch {
    res.status(401).json({ error: "Invalid/expired token" });
  }
});

app.delete("/admin/delete-user/:username", (req, res) => {
  const token = getToken(req);
  if (!token) return res.status(401).json({ error: "No token" });

  try {
    const data = jwt.verify(token, SECRET);

    if (data.role !== "admin") {
      return res.status(403).json({ error: "Forbidden: admin only" });
    }

    const target = req.params.username;
    res.json({ message: "User deleted (demo)", target, by: data.username });
  } catch {
    res.status(401).json({ error: "Invalid/expired token" });
  }
});

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
