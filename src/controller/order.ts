import { Orders } from "src/repo/entities/Orders";


export const order = async (req: any, res: any) => {

    const { username, address, products } = req.body;

    console.log(username, address, products);
    res.json({ username, address, products });


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