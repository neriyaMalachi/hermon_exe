import express from "express";

const app = express();
const PORT = 3000;

app.use(express.urlencoded({ extended: true }));

app.post("/submit/:id", (req, res) => {
  console.log(req.params.id);

  console.log("POST /submit body:", req.body);
});

app.listen(PORT, () => {
  console.log(` Server running on http://localhost:${PORT}`);
});
