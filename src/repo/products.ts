import { Products } from "../repo/entities/Products"
import { DataSource } from "typeorm"
import { AppDataSource } from "../repo/connectdb"
import { Users } from "../repo/entities/Users"


//to get the single prodcut from products table 
export const getSingleProduct = async (id: number) => {
    return await AppDataSource.getRepository(Products)
        .createQueryBuilder("products")
        .where(`product_id = ${id}`)
        .getOne();

}

//To get all products from products table
export const getAllProducts = async () => {
    return await AppDataSource
        .getRepository(Products)
        .createQueryBuilder("products")
        .select("*")
        .getRawMany();


}

// To get the status of a user either its admin true or null
export const checkAdmin = async (user_id: number) => {
    return await AppDataSource
        .getRepository(Users)
        .createQueryBuilder("users")
        .select(`"isAdmin"`)
        .where(`user_id = ${user_id}`)
        .getRawMany();
}

//Type defined for Adding product
type productsDetails = {
    productName: string,
    category: string,
    price: number,
    productDescription: string,
    stockQty: string
}

//Add Product Function 
export const productInsert = async (productDetails: productsDetails) => {

    return AppDataSource
        .getRepository(Products)
        .createQueryBuilder("products")
        .insert()
        .into(Products)
        .values([productDetails])
        .execute();

}

type updatedItems = {
    category: string,
    price: number,
    productDescription: string,
    stockQty: string
}

export const updateProductsItem = async (updatedItems: updatedItems, productId: number) => {
    return AppDataSource.
        getRepository(Products)
        .createQueryBuilder()
        .update(Products)
        .set(updatedItems)
        .where(`product_id = ${productId}`)
        .execute()
}