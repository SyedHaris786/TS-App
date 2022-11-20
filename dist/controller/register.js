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
exports.auth = void 0;
const bcrypt = require('bcrypt');
const register_1 = require("../repo/register");
const auth = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    let { username, email, password, phone_number } = req.body;
    console.log(req.body);
    try {
        if (!username || !email || !password || !phone_number) {
            res.json("Please enter all values");
        }
        else {
            let hashedPassword = yield bcrypt.hash(password, 5);
            password = hashedPassword;
            console.log(password);
            const added = yield (0, register_1.register)({
                username,
                email,
                password,
                phone_number
            });
            res.json({ "User created:": added });
        }
    }
    catch (err) {
        console.log(err);
        res.json(err.detail);
    }
});
exports.auth = auth;
//# sourceMappingURL=register.js.map