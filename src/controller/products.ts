import { Products } from "../repo/entities/Products"
import { createQueryBuilder } from "typeorm"

export const product = async (req: any, res: any) => {
    const { id } = req.params

    const singleProduct = await createQueryBuilder('products')
        .where(`product_id = ${id}`)
        .getOne();

    return res.json(singleProduct)
}

export const allproducts = async (req: any, res: any) => {
    const getAllProducts = await createQueryBuilder('products')
        .select("*")
        .getRawMany();

    res.json(getAllProducts);

}