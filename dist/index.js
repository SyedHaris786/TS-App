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
const dotenv = require("dotenv");
dotenv.config();
const express = require('express');
const pool = require("./scripts/connectdb");
const App_1 = require("./App");
const port = process.env.PORT || 3000;
const server = () => __awaiter(void 0, void 0, void 0, function* () {
    yield pool.query('SELECT NOW();');
    yield pool.end();
    App_1.default.listen(port, (err) => {
        if (err) {
            return console.log(err);
        }
        return console.log(`server is listening on ${port}`);
    });
});
//# sourceMappingURL=index.js.map