import { productsPrice } from "../repo/order"


export const order = async (req: any, res: any) => {

    const { userid, address, products } = req.body;

    // res.json({ userid, address, products });
    // console.log(products);


    try {

        if (!products || products.length == 0) {
            res.json("Order could not be empty")
        } else {
            console.log(products);
            // res.json(products);

            let values: any = [];
            const productsArray = await products.forEach((element: any) => {
                values.push(element.product_id);
            });

            const productsIds = values.toString();

            const fetchedValues = await productsPrice(productsIds)

            const sum = fetchedValues.reduce((accumulator, object) => {
                return accumulator + object.price;
            }, 0);

            console.log(sum, userid, address);
            res.json({ sum, userid, address });

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