import { DataSource } from "typeorm";

import { User } from "@modules/accounts/infra/typeorm/entities/User";
import { Category } from "@modules/cars/infra/typeorm/entities/Category";
import { Specification } from "@modules/cars/infra/typeorm/entities/Specification";

import { CreateCategories1684318819296 } from "./migrations/1684318819296-CreateCategories";
import { CreateSpecifications1684776480368 } from "./migrations/1684776480368-CreateSpecifications";
import { CreateUsers1684783673463 } from "./migrations/1684783673463-CreateUsers";
import { AlterUserDeleteUsername1684952756366 } from "./migrations/1684952756366-AlterUserDeleteUsername";
import { AlterUserAddAvatar1685404829768 } from "./migrations/1685404829768-AlterUserAddAvatar";
import { CreateCars1685700635823 } from "./migrations/1685700635823-CreateCars";

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
    CreateCars1685700635823,
  ],
  subscribers: [],
});

AppDataSource.initialize()
  .then(() => {
    console.log("Initialized");
  })
  .catch((error) => console.log(error));

export default AppDataSource;
