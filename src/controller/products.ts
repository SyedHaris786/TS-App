import { Products } from "../repo/entities/Products"
import { DataSource } from "typeorm"
import { AppDataSource } from "../repo/connectdb"
import { Users } from "../repo/entities/Users"

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

    const {
        userId,
        productName,
        category,
        price,
        productDescription,
        qty } = req.body;

    if (!productName || !category || !price || !qty) {
        res.json("Add all details")
    } else {

        try {

            const validateAdmin = await AppDataSource
                .getRepository(Users)
                .createQueryBuilder("users")
                .select(`"isAdmin"`)
                .where(`user_id = ${userId}`)
                .getRawMany();


            const adminCheck = validateAdmin[0].isAdmin

            if (adminCheck === true) {

                const insertProduct = await AppDataSource
                    .getRepository(Products)
                    .createQueryBuilder("products")
                    .insert()
                    .into(Products)
                    .values({ productName, category, price, productDescription, stockQty: qty })
                    .execute();

                res.json(`Added product ${productName} Successfully! `);
                console.log(`Added product ${productName} Successfully! `);


            } else {
                console.log(`User Id: ${userId} tried to enter product`);
                res.json(`You don't have privilege to add product`)

            }
        } catch (err) {


            res.json(err.detail)
            console.log(err);

        }
    }
}


export const updateProduct = async (req: any, res: any) => {

    const {
        productId,
        category,
        price,
        productDescription,
        qty } = req.body;


    const updatedItems = {
        category: category,
        price: price,
        productDescription: productDescription,
        stockQty: qty
    }

    try {


        const updateProduct = await AppDataSource.
            getRepository(Products)
            .createQueryBuilder()
            .update(Products)
            .set(updatedItems)
            .where(`product_id = ${productId}`)
            .execute()

        res.json(updateProduct);

    } catch (err) {
        console.log(err);

    }
}
