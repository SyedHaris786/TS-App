import { productsPrice, saveOrder } from "../repo/order"
import { Request, Response } from 'express';
//To calculate the total price and save the final order in DB 

export const order = async (req: Request, res: Response) => {

    const { userId, address, products } = req.body;

    // res.json({ userid, address, products });
    // console.log(products);


    try {

        if (!products || products.length == 0) {
            res.json("Order could not be empty")
        } else {
            console.log(products[0].qty);
            // res.json(products);

            const values: any = [];
            const productsArray = await products.forEach((element: any) => {
                values.push(element.product_id);
            });

            const productsIds = values.toString();

            const fetchedValues = await productsPrice(productsIds);


            const totalWithQuantity: any = []

            for (let i = 0; i < products.length; i++) {
                const quantityPrice = products[i].qty * fetchedValues[i].price;
                totalWithQuantity.push(quantityPrice)
            }


            const total = totalWithQuantity.reduce((accumulator: any, object: any) => {
                return accumulator + object;
            }, 0);

            console.log({ "total": total });

            const delivered = 0;
            const save = await saveOrder({ delivered, address, products, user_id: userId, total });
            console.log(save);


            res.json({ userId, address });
        }

    } catch (err) {
        console.log(err);

    }

}


// Order Request Pattern
// {
//     "username": "username",
//     "address": "Hello street 123",
//     "products": [
//       {
//         "product_id": 123,
//         "qty": 2
//       },
//       {
//         "product_id": 123,
//         "qty": 2
//       }
//     ]
//   }