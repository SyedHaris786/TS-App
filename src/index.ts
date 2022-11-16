import * as dotenv from 'dotenv'
dotenv.config()
const express = require('express');
const app = express();

//DB Connection
const { main } = require("./repo/connectdb")
// const pool = require("./scripts/connectdb")


//Routes Import
const products = require('./route/products');
// const auth = require('./route/auth')


//Json Middleware
app.use(express.json())
app.use(express.urlencoded({ extended: false }))

app.use('/api/v1', products);
// app.use('/api/v1',auth);




//SERVER
const port = process.env.PORT || 3000;
const server = async () => {

  // let a =  await pool.query('SELECT NOW();');
  // console.log("DB connected at: " + a.rows[0].now);

  await main();

  app.listen(port, (err: any) => {
    if (err) {
      return console.log(err)
    }
    return console.log(`Server is listening on ${port}`)
  })

}

server();