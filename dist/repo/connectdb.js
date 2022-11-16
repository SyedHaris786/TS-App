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
exports.main = void 0;
const typeorm_1 = require("typeorm");
const Orders_1 = require("./entities/Orders");
const Products_1 = require("./entities/Products");
const Users_1 = require("./entities/Users");
const main = () => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const pool = {
            user: process.env.USER,
            password: process.env.DBPASSWORD,
            host: process.env.HOST,
            database: process.env.DATABASE,
        };
        yield (0, typeorm_1.createConnection)({
            type: "postgres",
            host: pool.host,
            port: 5432,
            username: pool.user,
            password: pool.password,
            database: pool.database,
            entities: [Users_1.Users, Products_1.Products, Orders_1.Orders],
        });
        console.log("Connected to Postgres, Client!");
    }
    catch (err) {
        console.log(err);
    }
});
exports.main = main;
//# sourceMappingURL=connectdb.js.map