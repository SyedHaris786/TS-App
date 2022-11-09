"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.products = void 0;
const pool = require("../scripts/connectdb");
const products = (req, res) => {
    pool.query('SELECT * FROM products;')
        .then((data) => res.json(data.rows));
};
exports.products = products;
//# sourceMappingURL=products.js.map