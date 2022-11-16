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
exports.Orders = void 0;
const typeorm_1 = require("typeorm");
const Products_1 = require("./Products");
const Users_1 = require("./Users");
let Orders = class Orders {
};
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)({ type: "bigint", name: "order_id" }),
    __metadata("design:type", String)
], Orders.prototype, "orderId", void 0);
__decorate([
    (0, typeorm_1.Column)("character varying", { name: "delivered", length: 1 }),
    __metadata("design:type", String)
], Orders.prototype, "delivered", void 0);
__decorate([
    (0, typeorm_1.Column)("text", { name: "address" }),
    __metadata("design:type", String)
], Orders.prototype, "address", void 0);
__decorate([
    (0, typeorm_1.Column)("integer", { name: "quantity" }),
    __metadata("design:type", Number)
], Orders.prototype, "quantity", void 0);
__decorate([
    (0, typeorm_1.Column)("timestamp without time zone", {
        name: "created_at",
        nullable: true,
        default: () => "now()",
    }),
    __metadata("design:type", Object)
], Orders.prototype, "createdAt", void 0);
__decorate([
    (0, typeorm_1.Column)("timestamp without time zone", { name: "updated_at", nullable: true }),
    __metadata("design:type", Object)
], Orders.prototype, "updatedAt", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => Products_1.Products, (products) => products.orders),
    (0, typeorm_1.JoinColumn)([{ name: "product_id", referencedColumnName: "productId" }]),
    __metadata("design:type", Products_1.Products)
], Orders.prototype, "product", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => Users_1.Users, (users) => users.orders),
    (0, typeorm_1.JoinColumn)([{ name: "user_id", referencedColumnName: "userId" }]),
    __metadata("design:type", Users_1.Users)
], Orders.prototype, "user", void 0);
Orders = __decorate([
    (0, typeorm_1.Index)("orders_pkey", ["orderId"], { unique: true }),
    (0, typeorm_1.Entity)("orders", { schema: "public" })
], Orders);
exports.Orders = Orders;
//# sourceMappingURL=Orders.js.map