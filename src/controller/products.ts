import { Products } from "../repo/entities/Products"
import { DataSource } from "typeorm"
import { AppDataSource } from "../repo/connectdb"

//To see single product details
export const product = async (req: any, res: any) => {
    const { id } = req.params

    const singleProduct = await AppDataSource.getRepository(Products)
        .createQueryBuilder("products")
        .where(`product_id = ${id}`)
        .getOne();

    res.json(singleProduct)
}


//All Products Controller 
export const allProducts = async (req: any, res: any) => {
    const getAllProducts = await AppDataSource
        .getRepository(Products)
        .createQueryBuilder("products")
        .select("*")
        .getRawMany();

    res.json(getAllProducts);

}


export const addProduct = async (req: any, res: any) => {

    const { productName,
        category,
        price,
        productDescription,
        qty } = req.body;

    if (!productName || !category || !price || !qty) {
        res.json("Add all details")
    } else {

        try {
            const insertProduct = await AppDataSource
                .getRepository(Products)
                .createQueryBuilder("products")
                .insert()
                .into(Products)
                .values({ productName, category, price, productDescription, stockQty: qty })
                .execute();

            res.json(insertProduct)
        } catch (err) {


            res.json(err.detail)
            console.log(err);

        }
    }
}