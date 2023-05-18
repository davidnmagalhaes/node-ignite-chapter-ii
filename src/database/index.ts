import { DataSource } from "typeorm";

import { Category } from "../modules/cars/entities/Category";
import { CreateCategories1684318819296 } from "./migrations/1684318819296-CreateCategories";

const AppDataSource = new DataSource({
  type: "postgres",
  host: "localhost",
  port: 5432,
  username: "docker",
  password: "ignite",
  database: "rentx",
  synchronize: false,
  logging: false,
  entities: [Category],
  migrations: [CreateCategories1684318819296],
  subscribers: [],
});

export function createConnection(host = "database"): Promise<DataSource> {
  return AppDataSource.setOptions({ host }).initialize();
}

export default AppDataSource;
