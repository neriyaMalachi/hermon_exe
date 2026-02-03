import express from 'express'


const productsRouter = express()

productsRouter.get('/',(req,res)=>{
    console.log(req.secure);
    
    res.json({message:"hello from products route"})
})


export default productsRouter