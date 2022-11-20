import { Products } from "../repo/entities/Products"
import { DataSource } from "typeorm"
import { AppDataSource } from "../repo/connectdb"


export const product = async (req: any, res: any) => {
    const { id } = req.params

    const singleProduct = await AppDataSource.getRepository(Products)
        .createQueryBuilder("products")
        .where(`product_id = ${id}`)
        .getOne();

    res.json(singleProduct)
}

export const allproducts = async (req: any, res: any) => {
    const getAllProducts = await AppDataSource.getRepository(Products)
        .createQueryBuilder("products")
        .select("*")
        .getRawMany();

    res.json(getAllProducts);

}