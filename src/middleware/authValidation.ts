const jwt = require('jsonwebtoken')

export const auth = async (req: any, res: any, next: any) => {
    // Check Header
    const authHeader = req.headers.authorization

    if (!authHeader || !authHeader.startsWith('Bearer')) {
        res.send('Authentication invalid')
    }

    try {
        const token = authHeader.split(' ')[1]

        const payload = jwt.verify(token, process.env.JWT_SECRET)
        //Attach the user to the job routes    
        req.user = { userId: payload.userId, name: payload.name }
        next()
    } catch (error) {

        console.log('Authentication invalid')

    }




}