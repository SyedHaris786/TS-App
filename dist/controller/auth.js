"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.jwtValidation = exports.jwtGenerate = exports.baseRoutController = void 0;
const baseRoutController = (req, res) => {
    res.json({
        message: 'Hello World!'
    });
};
exports.baseRoutController = baseRoutController;
//  Single responsibility principle
const jwtGenerate = (req, res) => {
    //Only code here for jwt token creation will be written here otherwise it will break single responsibility principle
};
exports.jwtGenerate = jwtGenerate;
const jwtValidation = (req, res) => {
    // Only validation of jwt token will be present here 
};
exports.jwtValidation = jwtValidation;
//# sourceMappingURL=auth.js.map