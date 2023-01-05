"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Products = void 0;
const typeorm_1 = require("typeorm");
let Products = class Products {
};
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)({ type: "bigint", name: "product_id" }),
    __metadata("design:type", String)
], Products.prototype, "productId", void 0);
__decorate([
    (0, typeorm_1.Column)("character varying", { name: "product_name", unique: true, length: 50 }),
    __metadata("design:type", String)
], Products.prototype, "productName", void 0);
__decorate([
    (0, typeorm_1.Column)("character varying", { name: "category", nullable: true, length: 50 }),
    __metadata("design:type", Object)
], Products.prototype, "category", void 0);
__decorate([
    (0, typeorm_1.Column)("double precision", { name: "price" }),
    __metadata("design:type", Number)
], Products.prototype, "price", void 0);
__decorate([
    (0, typeorm_1.Column)("character varying", { name: "product_description", length: 254, nullable: true }),
    __metadata("design:type", String)
], Products.prototype, "productDescription", void 0);
__decorate([
    (0, typeorm_1.Column)("bigint", { name: "stock_qty" }),
    __metadata("design:type", String)
], Products.prototype, "stockQty", void 0);
__decorate([
    (0, typeorm_1.Column)("character varying", { name: "image_key", nullable: true }),
    __metadata("design:type", String)
], Products.prototype, "image_key", void 0);
Products = __decorate([
    (0, typeorm_1.Index)("products_pkey", ["productId"], { unique: true }),
    (0, typeorm_1.Entity)("products", { schema: "public" })
], Products);
exports.Products = Products;
//# sourceMappingURL=Products.js.map