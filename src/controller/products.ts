import { getAllProducts, getSingleProduct, checkAdmin, productInsert, updateProductsItem } from "../repo/products"
import { Request, Response } from 'express';

//To see single product details
export const product = async (req: Request, res: Response) => {
    const { id } = req.params
    const Id = parseInt(id)
    const singleProduct = await getSingleProduct(Id);

    res.json(singleProduct)
}


//All Products Controller 
export const allProducts = async (req: Request, res: Response) => {
    const getProducts = await getAllProducts();
    res.json(getProducts);

}


export const addProduct = async (req: Request, res: Response) => {

    const {
        userId,
        productName,
        category,
        price,
        productDescription,
        qty,
        imageKey } = req.body;

    if (!productName || !category || !price || !qty) {
        res.json("Add all details")
    } else {

        try {

            const validateAdmin = await checkAdmin(userId);


            const adminCheck = validateAdmin[0].isAdmin


            if (adminCheck === true) {

                const insertProduct = await productInsert({
                    productName,
                    category,
                    price,
                    productDescription,
                    stockQty: qty,
                    image_key: imageKey
                })
                console.log(insertProduct);

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


export const updateProduct = async (req: Request, res: Response) => {

    const {
        productId,
        category,
        price,
        productDescription,
        qty,
        imageKey } = req.body;


    const updatedItems = {
        category,
        price,
        productDescription,
        stockQty: qty,
        image_key: imageKey
    }

    try {


        const updateProduct = await updateProductsItem(updatedItems, productId)

        res.json(updateProduct);

    } catch (err) {
        console.log(err);

    }
}
