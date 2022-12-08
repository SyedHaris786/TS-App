import { Products } from "../repo/entities/Products"
import { Orders } from "../repo/entities/Orders"
import { DataSource } from "typeorm"
import { AppDataSource } from "../repo/connectdb"




export const saveOrder = async (params: any) => {
    const orderSave = await AppDataSource.getRepository(Orders)
        .createQueryBuilder("orders").insert()
        .into(Orders)
        .values(params)
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