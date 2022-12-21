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
exports.updateProduct = exports.addProduct = exports.allProducts = exports.product = void 0;
const products_1 = require("../repo/products");
const product = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    const singleProduct = yield (0, products_1.getSingleProduct)(id);
    res.json(singleProduct);
});
exports.product = product;
const allProducts = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const getProducts = yield (0, products_1.getAllProducts)();
    res.json(getProducts);
});
exports.allProducts = allProducts;
const addProduct = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { userId, productName, category, price, productDescription, qty } = req.body;
    if (!productName || !category || !price || !qty) {
        res.json("Add all details");
    }
    else {
        try {
            const validateAdmin = yield (0, products_1.checkAdmin)(userId);
            const adminCheck = validateAdmin[0].isAdmin;
            if (adminCheck === true) {
                const insertProduct = yield (0, products_1.productInsert)({
                    productName,
                    category,
                    price,
                    productDescription,
                    stockQty: qty
                });
                res.json(`Added product ${productName} Successfully! `);
                console.log(`Added product ${productName} Successfully! `);
            }
            else {
                console.log(`User Id: ${userId} tried to enter product`);
                res.json(`You don't have privilege to add product`);
            }
        }
        catch (err) {
            res.json(err.detail);
            console.log(err);
        }
    }
});
exports.addProduct = addProduct;
const updateProduct = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { productId, category, price, productDescription, qty } = req.body;
    const updatedItems = {
        category,
        price,
        productDescription,
        stockQty: qty
    };
    try {
        const updateProduct = yield (0, products_1.updateProductsItem)(updatedItems, productId);
        res.json(updateProduct);
    }
    catch (err) {
        console.log(err);
    }
});
exports.updateProduct = updateProduct;
//# sourceMappingURL=products.js.map