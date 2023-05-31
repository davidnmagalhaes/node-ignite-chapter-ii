import { DataSource } from "typeorm";

import { User } from "../modules/accounts/entities/User";
import { Category } from "../modules/cars/entities/Category";
import { Specification } from "../modules/cars/entities/Specification";
import { CreateCategories1684318819296 } from "./migrations/1684318819296-CreateCategories";
import { CreateSpecifications1684776480368 } from "./migrations/1684776480368-CreateSpecifications";
import { CreateUsers1684783673463 } from "./migrations/1684783673463-CreateUsers";
import { AlterUserDeleteUsername1684952756366 } from "./migrations/1684952756366-AlterUserDeleteUsername";
import { AlterUserAddAvatar1685404829768 } from "./migrations/1685404829768-AlterUserAddAvatar";

const AppDataSource = new DataSource({
  type: "postgres",
  host: "database_ignite",
  port: 5432,
  username: "docker",
  password: "ignite",
  database: "rentx",
  synchronize: false,
  logging: false,
  entities: [Category, Specification, User],
  migrations: [
    CreateCategories1684318819296,
    CreateSpecifications1684776480368,
    CreateUsers1684783673463,
    AlterUserDeleteUsername1684952756366,
    AlterUserAddAvatar1685404829768,
  ],
  subscribers: [],
});

AppDataSource.initialize()
  .then(() => {
    console.log("Initialized");
  })
  .catch((error) => console.log(error));

export default AppDataSource;
