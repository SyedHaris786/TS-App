import { Users } from "./entities/Users";
import { AppDataSource } from "./connectdb";

type userDetails = {
    username: string,
    email: string,
    password: string,
    phone_number: string
}

// Add user
export const register = async (userDetails: userDetails) => {

    const registerd = await AppDataSource.getRepository(Users)
        .createQueryBuilder("users").insert()
        .into(Users)
        .values([userDetails])
        .execute();

    // const registerd = Users.create(userDetails)


    return registerd


}

