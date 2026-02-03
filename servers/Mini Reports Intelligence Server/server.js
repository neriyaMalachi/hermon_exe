import express from "express";

const app = express();
const PORT = 8000;
app.use(express.json());




app.get("/",()=>{
    res.json({message:"OK"})
})




app.listen(PORT, () => {
  console.log("server run on port " + PORT);
});
