"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.order = void 0;
const order_1 = require("../repo/order");
const order = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    let { userId, address, products } = req.body;
    try {
        if (!products || products.length == 0) {
            res.json("Order could not be empty");
        }
        else {
            console.log(products[0].qty);
            let values = [];
            const productsArray = yield products.forEach((element) => {
                values.push(element.product_id);
            });
            const productsIds = values.toString();
            const fetchedValues = yield (0, order_1.productsPrice)(productsIds);
            let totalWithQuantity = [];
            for (let i = 0; i < products.length; i++) {
                const quantityPrice = products[i].qty * fetchedValues[i].price;
                totalWithQuantity.push(quantityPrice);
            }
            const total = totalWithQuantity.reduce((accumulator, object) => {
                return accumulator + object;
            }, 0);
            console.log({ "total": total });
            let delivered = 0;
            const save = yield (0, order_1.saveOrder)({ delivered, address, products, user_id: userId, total });
            console.log(save);
            res.json({ userId, address });
        }
    }
    catch (err) {
        console.log(err);
    }
});
exports.order = order;
//# sourceMappingURL=order.js.map