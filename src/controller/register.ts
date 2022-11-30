const bcrypt = require('bcrypt');
import { register } from "../repo/register";
import { creds } from "../repo/login";

export const auth = async (req: any, res: any) => {

  let {
    username,
    email,
    password,
    phone_number
  } = req.body;

  console.log(req.body);

  try {

    const getCreds = await creds(email);
    if (!username || !email || !password || !phone_number) {
      res.json("Please enter all values");

    }

    // if (getCreds[0].email || getCreds.length > 0) {

    //   res.json("Email already exist")
    // }
    else {

      let hashedPassword = await bcrypt.hash(password, 5);
      password = hashedPassword;
      console.log(password);

      const added = await register({
        username,
        email,
        password,
        phone_number
      })

      res.send("User created")

    }
  } catch (err) {

    console.log(err);
    res.json(err.detail)

  }
}

