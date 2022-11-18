// const pool = require("../scripts/connectdb")
const { verify } = require("../repo/register")
const bcrypt = require('bcrypt');
import { register } from "../repo/register";

export const auth = async (req: any, res: any) => {

  const {
    username,
    email,
    password,
    phone_number
  } = req.body;

  console.log(req.body);


  try {

    if (!username || !email || !password || !phone_number) {
      res.json("Please enter all values");

    } else {

      const added = await register({
        username,
        email,
        password,
        phone_number
      })

      res.json({ "User created:": added })

    }
  } catch (err) {

    console.log(err.detail);
    res.json(err.detail)

  }
}

