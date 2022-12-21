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
exports.Users = void 0;
const typeorm_1 = require("typeorm");
const Orders_1 = require("./Orders");
let Users = class Users extends typeorm_1.BaseEntity {
};
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)({ type: "bigint", name: "user_id" }),
    __metadata("design:type", String)
], Users.prototype, "userId", void 0);
__decorate([
    (0, typeorm_1.Column)("character varying", { name: "username", length: 50 }),
    __metadata("design:type", String)
], Users.prototype, "username", void 0);
__decorate([
    (0, typeorm_1.Column)("character varying", { name: "email", unique: true, length: 200 }),
    __metadata("design:type", String)
], Users.prototype, "email", void 0);
__decorate([
    (0, typeorm_1.Column)("character varying", { name: "password", length: 255 }),
    __metadata("design:type", String)
], Users.prototype, "password", void 0);
__decorate([
    (0, typeorm_1.Column)("text", { name: "address", nullable: true }),
    __metadata("design:type", Object)
], Users.prototype, "address", void 0);
__decorate([
    (0, typeorm_1.Column)("integer", { name: "age", nullable: true }),
    __metadata("design:type", Object)
], Users.prototype, "age", void 0);
__decorate([
    (0, typeorm_1.Column)("character varying", {
        name: "phone_number", length: 12
    }),
    __metadata("design:type", String)
], Users.prototype, "phone_number", void 0);
__decorate([
    (0, typeorm_1.Column)("bool", { name: "isAdmin", nullable: true }),
    __metadata("design:type", Boolean)
], Users.prototype, "isAdmin", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(() => Orders_1.Orders, (orders) => orders.user_id),
    __metadata("design:type", Array)
], Users.prototype, "orders", void 0);
Users = __decorate([
    (0, typeorm_1.Index)("users_email_key", ["email"], { unique: true }),
    (0, typeorm_1.Index)("users_pkey", ["userId"], { unique: true }),
    (0, typeorm_1.Index)("users_user_id_key", ["userId"], { unique: true }),
    (0, typeorm_1.Entity)("users", { schema: "public" })
], Users);
exports.Users = Users;
//# sourceMappingURL=Users.js.map