import {
  Column,
  Entity,
  Index,
  OneToMany,
  PrimaryGeneratedColumn,
} from "typeorm";
import { Orders } from "./Orders";

@Index("products_pkey", ["productId"], { unique: true })
@Entity("products", { schema: "public" })
export class Products {
  @PrimaryGeneratedColumn({ type: "bigint", name: "product_id" })
  productId: string;

  @Column("character varying", { name: "product_name", length: 50 })
  productName: string;

  @Column("character varying", { name: "category", nullable: true, length: 50 })
  category: string | null;

  @Column("double precision", { name: "price" })
  price: number;

  @Column("character varying", { name: "product_description", length: 254 })
  productDescription: string;

  @Column("bigint", { name: "stock_qty" })
  stockQty: string;

  @OneToMany(() => Orders, (orders) => orders.product)
  orders: Orders[];
}
