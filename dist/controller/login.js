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
exports.login = void 0;
const bcrypt = require('bcrypt');
const login_1 = require("../repo/login");
const jwt = require('jsonwebtoken');
const login = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { email, password } = req.body;
    try {
        if (!email || !password) {
            res.send("Please Enter the valid Credentials");
        }
        const getCreds = yield (0, login_1.creds)(email);
        if (!getCreds || getCreds.length == 0) {
            res.json("Please enter valid credentials");
        }
        else {
            const validPassword = getCreds[0].password;
            bcrypt.compare(password, validPassword, (err, isMatch) => {
                if (err) {
                    console.log(err);
                }
                console.log(isMatch);
                if (isMatch) {
                    const username = getCreds[0].username;
                    const jawt = jwt.sign({ 'username': username }, process.env.JWT_SECRET, {
                        expiresIn: '30d',
                    });
                    res.json(jawt);
                }
                else {
                    res.json("Invalid Credentials");
                }
            });
        }
    }
    catch (err) {
        console.log(err);
    }
});
exports.login = login;
//# sourceMappingURL=login.js.map