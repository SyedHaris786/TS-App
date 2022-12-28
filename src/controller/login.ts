const bcrypt = require('bcrypt');
import { creds } from "../repo/login";
const jwt = require('jsonwebtoken');


export const login = async (req: any, res: any) => {

    const { email, password } = req.body;
    try {
        if (!email || !password) {
            res.send("Please Enter the valid Credentials")
        }

        const getCreds = await creds(email);


        if (!getCreds || getCreds.length === 0) {
            res.json("Please enter valid credentials")
        }
        else {
            const validPassword = getCreds[0].password

            bcrypt.compare(password, validPassword, (err: any, isMatch: any) => {
                if (err) {
                    console.log(err);
                }
                console.log(isMatch);

                if (isMatch) {
                    const username = getCreds[0].username;

                    const jawt = jwt.sign({ 'username': username }, process.env.JWT_SECRET, {
                        expiresIn: '30d',
                    })

                    res.json(jawt)

                } else {
                    res.json("Invalid Credentials");
                }

            });
        }
    } catch (err) {
        console.log(err);

    }


}


