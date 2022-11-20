const bcrypt = require('bcrypt');
import { register } from "../repo/register";

export const auth = async (req: any, res: any) => {

  let {
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

      let hashedPassword = await bcrypt.hash(password, 5);
      password = hashedPassword;
      console.log(password);

      const added = await register({
        username,
        email,
        password,
        phone_number
      })

      res.json({ "User created:": added })

    }
  } catch (err) {

    console.log(err);
    res.json(err.detail)

  }
}

