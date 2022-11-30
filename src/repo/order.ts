import { Products } from "../repo/entities/Products"
import { Orders } from "../repo/entities/Orders"
import { DataSource } from "typeorm"
import { AppDataSource } from "../repo/connectdb"


type orderDetails = {
    userid: number,
    address: string,
    products: [any],
    total: number
}


export const saveOrder = async (delivered: any, address: string, order_details: any, user_id: number, total: number) => {

    const orderSave = await AppDataSource.getRepository(Orders)
        .createQueryBuilder("orders").insert()
        .into(Orders)
        .values([delivered, address, order_details, user_id, total])
        .execute();

    return orderSave
}


export const productsPrice = async (productIds: any) => {

    // const tostring = productIds.toString();

    const fetchPrices = await AppDataSource.getRepository(Products)
        .createQueryBuilder("products")
        .select('price')
        .where(`product_id IN (${productIds})`)
        .getRawMany();

    return fetchPrices

}