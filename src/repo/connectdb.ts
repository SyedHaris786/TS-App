// const Pool = require('pg').Pool;

// const pool = new Pool({
//   user:     process.env.USER,
//   password: process.env.DBPASSWORD,
//   host:     process.env.HOST,
//   port:     process.env.DBPORT,
//   database: process.env.DATABASE,
// });

// module.exports = pool;

import { DataSource } from "typeorm";
import { Orders } from "./entities/Orders";
import { Products } from "./entities/Products";
import { Users } from "./entities/Users";




const pool = {
  user: process.env.USER,
  password: process.env.DBPASSWORD,
  host: process.env.HOST,
  database: process.env.DATABASE,
};

export const AppDataSource = new DataSource({
  type: "postgres",
  host: pool.host,
  port: 5432,
  username: pool.user,
  password: pool.password,
  database: pool.database,
  entities: [Users, Products, Orders],
  // synchronize: true
});




