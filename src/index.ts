import * as dotenv from 'dotenv'
dotenv.config()
const express = require('express');
const pool = require("./scripts/connectdb")


import app from './App'



const port = process.env.PORT || 3000

const server = async () => {

  let a =  await pool.query('SELECT NOW();');
  console.log("DB connected at: " + a.rows[0].now);
  


  app.listen(port, (err:any) => {
  if (err) {
    return console.log(err)
  }

  return console.log(`Server is listening on ${port}`)
  })

}

server();