import express from 'express'
import usersRouter from './routers/users.js';
import productsRouter from './routers/products.js';
import { requestInfo } from './middleware/requestInfo.js';


const app = express()


app.use('/users',usersRouter)
app.use('/products',productsRouter)
app.get('/idan',(req,res)=>{
    res.json({message:"helloo i m idan :) !"})
})

app.listen(8080,()=>{
    console.log("server run....");
    
})

