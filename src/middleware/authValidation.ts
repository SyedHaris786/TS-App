// const jwt = require('jsonwebtoken')
import jwt, { Secret, JwtPayload } from 'jsonwebtoken';


export const auth = async (req: any, res: any, next: any) => {
    // Check Header
    const authHeader = req.headers.authorization

    if (!authHeader || !authHeader.startsWith('Bearer')) {
        res.send('Authentication invalid')
    }

    try {
        const SECRET_KEY: Secret = process.env.JWT_SECRET || '';
        const token = authHeader.split(' ')[1]
        const payload = jwt.verify(token, SECRET_KEY)
        //Attach the user to the job routes  
        console.log({ payload });

        //req.user = { userId: payload.userId, name: payload.name }
        next()
    } catch (error) {

        console.log('Authentication invalid')

    }

}