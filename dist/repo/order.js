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
exports.productsPrice = exports.saveOrder = void 0;
const Products_1 = require("../repo/entities/Products");
const Orders_1 = require("../repo/entities/Orders");
const connectdb_1 = require("../repo/connectdb");
const saveOrder = (params) => __awaiter(void 0, void 0, void 0, function* () {
    const orderSave = yield connectdb_1.AppDataSource.getRepository(Orders_1.Orders)
        .createQueryBuilder("orders").insert()
        .into(Orders_1.Orders)
        .values(params)
        .execute();
    return orderSave;
});
exports.saveOrder = saveOrder;
const productsPrice = (productIds) => __awaiter(void 0, void 0, void 0, function* () {
    const fetchPrices = yield connectdb_1.AppDataSource.getRepository(Products_1.Products)
        .createQueryBuilder("products")
        .select('price')
        .where(`product_id IN (${productIds})`)
        .getRawMany();
    return fetchPrices;
});
exports.productsPrice = productsPrice;
//# sourceMappingURL=order.js.map