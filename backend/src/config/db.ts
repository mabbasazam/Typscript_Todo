import dotenv from "dotenv";
dotenv.config();

import { DataSource } from "typeorm";
import { Todo } from "../models/todo.entity";

export const AppDataSource = new DataSource({
  type: "mysql",
  host: process.env.DB_HOST,
  port: Number(process.env.DB_PORT),
  username: process.env.DB_USERNAME,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_DATABASE,
  entities: [Todo],
  migrations: ["src/migrations/*.ts"], 
  // synchronize: true, // ❌ only for dev
});
