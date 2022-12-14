import {
  BaseEntity,
  Column,
  Entity,
  Index,
  OneToMany,
  PrimaryGeneratedColumn,
} from "typeorm";
import { Orders } from "./Orders";

@Index("users_email_key", ["email"], { unique: true })
@Index("users_pkey", ["userId"], { unique: true })
@Index("users_user_id_key", ["userId"], { unique: true })
@Entity("users", { schema: "public" })
export class Users extends BaseEntity {
  @PrimaryGeneratedColumn({ type: "bigint", name: "user_id" })
  userId: string;

  @Column("character varying", { name: "username", length: 50 })
  username: string;

  @Column("character varying", { name: "email", unique: true, length: 200 })
  email: string;

  @Column("character varying", { name: "password", length: 255 })
  password: string;

  @Column("text", { name: "address", nullable: true })
  address: string | null;

  @Column("integer", { name: "age", nullable: true })
  age: number | null;

  @Column("character varying", {
    name: "phone_number", length: 12
  })
  phone_number: string;

  @Column("bool", { name: "isAdmin", nullable: true })
  isAdmin: boolean

  @OneToMany(() => Orders, (orders) => orders.user_id)
  orders: Orders[];
}
