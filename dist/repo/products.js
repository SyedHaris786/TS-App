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
exports.updateProductsItem = exports.productInsert = exports.checkAdmin = exports.getAllProducts = exports.getSingleProduct = void 0;
const Products_1 = require("../repo/entities/Products");
const connectdb_1 = require("../repo/connectdb");
const Users_1 = require("../repo/entities/Users");
const getSingleProduct = (id) => __awaiter(void 0, void 0, void 0, function* () {
    return yield connectdb_1.AppDataSource.getRepository(Products_1.Products)
        .createQueryBuilder("products")
        .where(`product_id = ${id}`)
        .getOne();
});
exports.getSingleProduct = getSingleProduct;
const getAllProducts = () => __awaiter(void 0, void 0, void 0, function* () {
    return yield connectdb_1.AppDataSource
        .getRepository(Products_1.Products)
        .createQueryBuilder("products")
        .select("*")
        .getRawMany();
});
exports.getAllProducts = getAllProducts;
const checkAdmin = (user_id) => __awaiter(void 0, void 0, void 0, function* () {
    return yield connectdb_1.AppDataSource
        .getRepository(Users_1.Users)
        .createQueryBuilder("users")
        .select(`"isAdmin"`)
        .where(`user_id = ${user_id}`)
        .getRawMany();
});
exports.checkAdmin = checkAdmin;
const productInsert = (productDetails) => __awaiter(void 0, void 0, void 0, function* () {
    return connectdb_1.AppDataSource
        .getRepository(Products_1.Products)
        .createQueryBuilder("products")
        .insert()
        .into(Products_1.Products)
        .values([productDetails])
        .execute();
});
exports.productInsert = productInsert;
const updateProductsItem = (updatedItems, productId) => __awaiter(void 0, void 0, void 0, function* () {
    return connectdb_1.AppDataSource.
        getRepository(Products_1.Products)
        .createQueryBuilder()
        .update(Products_1.Products)
        .set(updatedItems)
        .where(`product_id = ${productId}`)
        .execute();
});
exports.updateProductsItem = updateProductsItem;
//# sourceMappingURL=products.js.map