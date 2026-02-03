import express from 'express'
import cors from 'cors'
import { MongoClient } from 'mongodb'


const app = express()
const PORT = 8000
const connectionString = "mongodb://127.0.0.1:27017"
const client = new MongoClient(connectionString)

await client.connect()
console.log("mongo connected");











app.listen(PORT, () => {
  console.log(`Go catch the server at PORT ${PORT}`)
})