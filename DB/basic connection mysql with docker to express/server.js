import express from "express";
import mysql from "mysql2/promise";

const app = express();
app.use(express.json());

const connection = await mysql.createConnection({
  host: "127.0.0.1",
  user: "root",
  password: "147258",
  database: "moti",
  port: 3306,
});
await connection.query("SELECT 1");
console.log("mysql connected"); 

app.get("/", async (req, res) => {
  try {
    const data = await connection.query("select NOW() as Time");
    res.json({
      db: "connection",
      time: data[0][0].Time,
    });
  } catch (error) {
    res.status(500).json({
      db: "error",
      message: err.message,
    });
  }
});

app.listen(3000, () => {
  console.log("Server running on http://localhost:3000");
});


// command to pull and run container mysql
// docker run --name neriya_Container -e MYSQL_ROOT_PASSWORD=1234 -e MYSQL_DATABASE=mosh -p 3306:3306 -d mysql:8