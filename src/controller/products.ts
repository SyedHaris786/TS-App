import { getAllProducts, getSingleProduct, checkAdmin, productInsert, updateProductsItem } from "../repo/products"


//To see single product details
export const product = async (req: any, res: any) => {
    const { id } = req.params

    const singleProduct = await getSingleProduct(id);

    res.json(singleProduct)
}


//All Products Controller 
export const allProducts = async (req: any, res: any) => {
    const getProducts = await getAllProducts();
    res.json(getProducts);

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

            const validateAdmin = await checkAdmin(userId);


            const adminCheck = validateAdmin[0].isAdmin


            if (adminCheck === true) {

                const insertProduct = await productInsert({
                    productName,
                    category,
                    price,
                    productDescription,
                    stockQty: qty
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


export const updateProduct = async (req: any, res: any) => {

    const {
        productId,
        category,
        price,
        productDescription,
        qty } = req.body;


    const updatedItems = {
        category,
        price,
        productDescription,
        stockQty: qty
    }

    try {


        const updateProduct = await updateProductsItem(updatedItems, productId)

        res.json(updateProduct);

    } catch (err) {
        console.log(err);

    }
}
