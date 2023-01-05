import bcrypt from "bcrypt";
import { register } from "../repo/register";
import { creds } from "../repo/login";
import { Request, Response } from 'express';

export const auth = async (req: Request, res: Response) => {

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

      const getCreds = await creds(email);
      if (getCreds) {

        res.json("Email already exist")
      }
      else {

        const hashedPassword = await bcrypt.hash(password, 5);
        const hash = hashedPassword;
        console.log(hash);

        const added = await register({
          username,
          email,
          password: hash,
          phone_number
        })

        res.send("User created")

      }
    }

  } catch (err) {

    console.log(err);
    res.json(err.detail)

  }
}

