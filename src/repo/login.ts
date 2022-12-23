import { Users } from "./entities/Users";
import { DataSource } from "typeorm";
import { AppDataSource } from "./connectdb";
import e from "express";


export const creds = async (email: any) => {

    const getDetails = await Users.find({
        select: {
            username: true,
            email: true,
            password: true
        },

        where: {
            email: email
        }
    })
    if (getDetails) {
        console.log('User found')
    }
    return getDetails
}


