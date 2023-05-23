import { DataSource } from "typeorm";

import { Category } from "../modules/cars/entities/Category";
import { Specification } from "../modules/cars/entities/Specification";
import { CreateCategories1684318819296 } from "./migrations/1684318819296-CreateCategories";
import { CreateSpecifications1684776480368 } from "./migrations/1684776480368-CreateSpecifications";
import { CreateUsers1684783673463 } from "./migrations/1684783673463-CreateUsers";

const AppDataSource = new DataSource({
  type: "postgres",
  host: "database_ignite",
  port: 5432,
  username: "docker",
  password: "ignite",
  database: "rentx",
  synchronize: false,
  logging: false,
  entities: [Category, Specification],
  migrations: [
    CreateCategories1684318819296,
    CreateSpecifications1684776480368,
    CreateUsers1684783673463,
  ],
  subscribers: [],
});

AppDataSource.initialize()
  .then(() => {
    console.log("Initialized");
  })
  .catch((error) => console.log(error));

export default AppDataSource;
