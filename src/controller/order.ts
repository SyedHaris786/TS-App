import { productsPrice, saveOrder } from "../repo/order"


export const order = async (req: any, res: any) => {

    let { userid, address, products } = req.body;

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

            const total = fetchedValues.reduce((accumulator, object) => {
                return accumulator + object.price;
            }, 0);

            // address = JSON.stringify(address);

            // let prods = JSON.stringify(products);
            res.json({ total, userid, address });

            // let delivered = "1";
            // const save = saveOrder(delivered, address, prods, userid, total);
            // console.log(save);

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