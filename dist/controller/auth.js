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
const { verify } = require("../repo/auth");
const bcrypt = require('bcrypt');
const auth_1 = require("../repo/auth");
const auth = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { username, email, password, phone_number } = req.body;
    console.log(req.body);
    try {
        const added = yield (0, auth_1.register)({
            username,
            email,
            password,
            phone_number
        });
        res.json({ "User added successfully": added });
    }
    catch (err) {
        console.log(err.detail);
        res.json(err.detail);
    }
});
exports.auth = auth;
//# sourceMappingURL=auth.js.map