"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppDataSource = void 0;
const typeorm_1 = require("typeorm");
const Orders_1 = require("./entities/Orders");
const Products_1 = require("./entities/Products");
const Users_1 = require("./entities/Users");
const pool = {
    user: process.env.USER,
    password: process.env.DBPASSWORD,
    host: process.env.HOST,
    database: process.env.DATABASE,
};
exports.AppDataSource = new typeorm_1.DataSource({
    type: "postgres",
    host: pool.host,
    port: 5432,
    username: pool.user,
    password: pool.password,
    database: pool.database,
    entities: [Users_1.Users, Products_1.Products, Orders_1.Orders],
});
//# sourceMappingURL=connectdb.js.map