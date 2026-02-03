import express from "express";

const app = express();
app.use(express.json());

let data = [];
let idCounter = 1;

app.get("/get", (req, res) => {
  res.json(data);
});
app.get("/getById/:id", (req, res) => {
  const id = req.params.id;
  if (!id) {
    res.status(400).json({ error: "id is requied" });
  }
  const item = data.find((i) => i.id == id);
  if (!item) {
    res.status(404).json({ error: "item not found" });
  }
  res.status(200).json({ data: item });
});
app.post("/addItem", (req, res) => {
  const { name, age } = req.body;

  if (!name || !age) {
    return res.status(400).json({ error: "name or age not difind" });
  }
  const newItem = {
    id: idCounter++,
    name: name,
    age: age,
  };
  data.push(newItem);
  res.status(200).json({ message: "the item add successfull" });
});
app.put("/edit/:id", (req, res) => {
  const id = req.params.id;
  const { name, age } = req.body;
  const item = data.find((i) => i.id == id);

  if (!item) {
    res.status(404).json({ error: "item not found" });
  }
  if (!name || !age) {
    res.status(400).json({ error: "name or age is required" });
  }
  item.name = name;
  item.age = age;
  res.json(item);
});
app.delete("/delete/:id", (req, res) => {
  const { id } = req.params;
  if (!id) {
    res.status(400).json({ error: "id id requird" });
  }
  const IndexItem = data.findIndex((i) => i.id == id);
  if (IndexItem < -1) {
    res.status(404).json({ error: "item not found" });
  }
  const deleted = data.splice(IndexItem, 1);
  res.json(deleted[0]);
});

app.listen(8000, () => {
  console.log("Server express run lisren port 8000");
});
