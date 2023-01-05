import bcrypt from "bcrypt";
import { creds } from "../repo/login";
import jwt, { Secret, JwtPayload } from 'jsonwebtoken';
import { Request, Response } from 'express';

export const login = async (req: Request, res: Response) => {

    const { email, password } = req.body;
    try {
        if (!email || !password) {
            res.send("Please Enter the valid Credentials")
        }

        const getCreds = await creds(email);


        if (!getCreds) {
            res.json("Please enter valid credentials")
        }
        else {
            const validPassword = getCreds.password

            bcrypt.compare(password, validPassword, (err: any, isMatch: any) => {
                if (err) {
                    console.log(err);
                }
                console.log(isMatch);

                if (isMatch) {
                    const username = getCreds.username;

                    const SECRET_KEY: Secret = process.env.JWT_SECRET || '';
                    const jawt = jwt.sign({ 'username': username }, SECRET_KEY, {
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


