import * as dotenv from 'dotenv'
dotenv.config()
import express from 'express';
const app = express();
import { AppDataSource } from './repo/connectdb'



//DB Connection
// const { main } = require("./repo/connectdb") // todo
// const pool = require("./scripts/connectdb")


//Routes Import
import login from './route/login';
import products from './route/products'
import register from './route/register';
import order from './route/order'
import cors from "cors"

//Json Middleware
app.use(express.json())
app.use(express.urlencoded({ extended: false }))
app.use(cors())

app.use('/api/v1', login);
app.use('/api/v1', products);
app.use('/api/v1', register);
app.use('/api/v1', order);

//SERVER
const port = process.env.PORT || 5000;
const server = async () => {

  await AppDataSource.initialize()
    .then(() => {
      console.log("Data Source has been initialized!")
    })
    .catch((err) => {
      console.error("Error during Data Source initialization", err)
    })

  app.listen(port, () => {
    return console.log(`Server is listening on ${port}`)
  })

}

server();