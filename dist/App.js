"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express = require("express");
const auth_1 = require("./controller/auth");
const products_1 = require("./controller/products");
class App {
    constructor() {
        this.express = express();
        this.mountRoutes();
        // this.mountMiddleware()
    }
    mountRoutes() {
        const router = express.Router();
        router.route('/').get(auth_1.baseRoutController);
        router.route('/products').get(products_1.products);
        this.express.use('/', router);
    }
}
exports.default = new App().express;
//# sourceMappingURL=App.js.map