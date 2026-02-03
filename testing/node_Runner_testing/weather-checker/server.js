import express from "express";

export const app = express();
app.use(express.json());

app.post("/check-weather", (req, res) => {
  const { temperature, windSpeed } = req.body;

  if (temperature < 0 || temperature > 35) {
    return res.json({ safe: false });
  }

  if (windSpeed > 60) {
    return res.json({ safe: false });
  }

  res.json({ safe: true });
});

  app.listen(3000, () => console.log("Server running on 3000"));
