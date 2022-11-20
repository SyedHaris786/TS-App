import { Users } from "./entities/Users";
import { DataSource } from "typeorm";
import { AppDataSource } from "./connectdb";
import e from "express";


export const creds = async (email: any) => {

    // const getDetails = await AppDataSource.getRepository(Users)
    //     .createQueryBuilder("users")
    //     .select("*")
    //     .where(`email ='${email}'`)
    //     .getRawOne();


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

