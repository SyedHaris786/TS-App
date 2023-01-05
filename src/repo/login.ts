import { Users } from "./entities/Users";


export const creds = async (email: string) => {

    return await Users.findOne({
        select: {
            username: true,
            email: true,
            password: true
        },

        where: {
            email: email
        }
    })
}


