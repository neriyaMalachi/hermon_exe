import express from "express";

const app = express();
const port = 8080;
app.use(express.json())
app.get("/user", (req, res) => {
  const { token } = req.headers;
  if (token === "idan") {
    return res.json({ message: "users" });
  }

  res.json({ error: "error" });
});





app.post("/addUser", (req, res) => {
  console.log(req.body);
  
  const user = req.body;
  console.log(user);

  res.status(200).json({ date: user });
});







app.listen(port, () => {
  console.log("run server...");
});
