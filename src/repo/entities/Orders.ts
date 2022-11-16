import {
  Column,
  Entity,
  Index,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
} from "typeorm";
import { Products } from "./Products";
import { Users } from "./Users";

@Index("orders_pkey", ["orderId"], { unique: true })
@Entity("orders", { schema: "public" })
export class Orders {
  @PrimaryGeneratedColumn({ type: "bigint", name: "order_id" })
  orderId: string;

  @Column("character varying", { name: "delivered", length: 1 })
  delivered: string;

  @Column("text", { name: "address" })
  address: string;

  @Column("integer", { name: "quantity" })
  quantity: number;

  @Column("timestamp without time zone", {
    name: "created_at",
    nullable: true,
    default: () => "now()",
  })
  createdAt: Date | null;

  @Column("timestamp without time zone", { name: "updated_at", nullable: true })
  updatedAt: Date | null;

  @ManyToOne(() => Products, (products) => products.orders)
  @JoinColumn([{ name: "product_id", referencedColumnName: "productId" }])
  product: Products;

  @ManyToOne(() => Users, (users) => users.orders)
  @JoinColumn([{ name: "user_id", referencedColumnName: "userId" }])
  user: Users;
}
