import {
  Column,
  Entity,
  Index,
  ManyToOne,
  PrimaryGeneratedColumn,
} from "typeorm";
import { Users } from "./Users";

@Index("orders_pkey", ["orderId"], { unique: true })
@Entity("orders", { schema: "public" })
export class Orders {
  @PrimaryGeneratedColumn({ type: "bigint", name: "order_id" })
  orderId: string;

  @Column("character varying", { name: "delivered", length: 1, nullable: true })
  delivered: string;

  @Column("text", { name: "address" })
  address: string;

  @Column("int", { name: "total" })
  total: number;

  @Column("jsonb", { name: "products" })
  products: any;

  @Column("timestamp without time zone", {
    name: "created_at",
    nullable: true,
    default: () => "now()",
  })
  createdAt: Date | null;

  @Column("timestamp without time zone", { name: "updated_at", nullable: true })
  updatedAt: Date | null;


  // @ManyToOne(() => Users, (users) => users.orders)
  // @JoinColumn([{ name: "user_id", referencedColumnName: "user_id" }])
  // user: Users;

  @ManyToOne(() => Users, (users) => users.orders)
  user_id: Users

  // @Column("int", { name: "user_id" })
  // user_id: number;

}
