import * as dotenv from 'dotenv'
dotenv.config()
const express = require('express');
const app = express();
const multer = require("multer") // todo
import { AppDataSource } from './repo/connectdb'



//DB Connection
const { main } = require("./repo/connectdb") // todo
// const pool = require("./scripts/connectdb")


//Routes Import
import login from './route/login';
const products = require('./route/products');
const register = require('./route/register')
const order = require('./route/order')
const cors = require("cors")

//Json Middleware
app.use(express.json())
app.use(express.urlencoded({ extended: false }))
app.use(cors())

app.use('/api/v1', login);
app.use('/api/v1', products);
app.use('/api/v1', register);
app.use('/api/v1', order);

//SERVER
const port = process.env.PORT || 3000;
const server = async () => {


  await AppDataSource.initialize()
    .then(() => {
      console.log("Data Source has been initialized!")
    })
    .catch((err) => {
      console.error("Error during Data Source initialization", err)
    })

  app.listen(port, (err: any) => {
    if (err) {
      return console.log(err)
    }
    return console.log(`Server is listening on ${port}`)
  })

}

server();