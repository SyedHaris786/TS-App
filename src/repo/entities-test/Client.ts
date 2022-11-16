import { Person } from "./utils/Person";
import {
  Entity,
  Column,
  CreateDateColumn,
  UpdateDateColumn,
  OneToMany,
  ManyToMany,
  JoinTable,
} from 'typeorm';
import { Transaction } from "./Transaction";
import { Banker } from "./Banker";

@Entity()
export class Client extends Person {
  @Column({
    type: 'numeric',
  })
  balance: number;

  @Column({
    name: 'active',
    default: true,
  })
  is_active: boolean;

  @Column({
    type: 'simple-json',
    nullable: true,
  })
  additional_info: {
    age: number;
    hair_color: string;
  };

  @Column({ type: 'simple-array', default: [] })
  family_members: string[];

  @ManyToMany((type) => Banker, {
    cascade: true,
  })
  bankers: Banker[];

  @OneToMany(
    () => Transaction,
    transaction => transaction.client)
  transactions: Transaction[]

  @CreateDateColumn()
  created_at: Date;

  @UpdateDateColumn()
  updated_at: Date;



}