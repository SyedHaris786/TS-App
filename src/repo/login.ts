import { Users } from "./entities/Users";
import { DataSource } from "typeorm";
import { AppDataSource } from "./connectdb";
import e from "express";


export const creds = async (email: any) => {

    const getDetails = await Users.find({
        select: {
            username: true,
            password: true
        },

        where: {
            email: email
        }
    })

    return getDetails
}

