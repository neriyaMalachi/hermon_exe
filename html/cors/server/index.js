// server.js
const express = require("express");
const cors = require("cors");

const app = express();

app.use(cors());

app.get("/data", (req, res) => {
    console.log("hekko");
    
  res.json({ message: "Hello from server" });
});

app.listen(5000, () => {
  console.log("Server running on port 5000");
});
