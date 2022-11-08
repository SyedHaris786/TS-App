"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express = require("express");
class App {
    constructor() {
        this.express = express();
        this.mountRoutes();
        // this.mountMiddleware()
    }
    mountRoutes() {
        const router = express.Router();
        router.get('/', (req, res) => {
            res.json("Hello /");
        });
        router.get('/hello', (req, res) => {
            res.json("you yes you ");
        });
        this.express.use('/', router);
    }
}
exports.default = new App().express;
//# sourceMappingURL=App.js.map