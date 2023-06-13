import { DataSource, DataSourceOptions } from "typeorm";
import { SeederOptions } from "typeorm-extension";

import { UserTokens } from "@modules/accounts/infra/typeorm/entities/UserTokens";
import { Rental } from "@modules/rentals/infra/typeorm/entities/Rental";

import { User } from "../../../modules/accounts/infra/typeorm/entities/User";
import { Car } from "../../../modules/cars/infra/typeorm/entities/Car";
import { Category } from "../../../modules/cars/infra/typeorm/entities/Category";
import { Specification } from "../../../modules/cars/infra/typeorm/entities/Specification";
import { CreateCategories1684318819296 } from "./migrations/1684318819296-CreateCategories";
import { CreateSpecifications1684776480368 } from "./migrations/1684776480368-CreateSpecifications";
import { CreateUsers1684783673463 } from "./migrations/1684783673463-CreateUsers";
import { AlterUserDeleteUsername1684952756366 } from "./migrations/1684952756366-AlterUserDeleteUsername";
import { AlterUserAddAvatar1685404829768 } from "./migrations/1685404829768-AlterUserAddAvatar";
import { CreateCars1685700635823 } from "./migrations/1685700635823-CreateCars";
import { CreateSpecificationsCars1686318064006 } from "./migrations/1686318064006-CreateSpecificationsCars";
import { CreateCarImages1686492713259 } from "./migrations/1686492713259-CreateCarImages";
import { CreateRentals1686494956424 } from "./migrations/1686494956424-CreateRentals";
import { CreateUsersToken1686590130963 } from "./migrations/1686590130963-CreateUsersToken";
import { MainSeeder } from "./seed/MainSeeder";

const options: DataSourceOptions & SeederOptions = {
  type: "postgres",
  host: process.env.NODE_ENV === "test" ? "localhost" : "database_ignite", // database_ignite || localhost
  port: 5432,
  username: "docker",
  password: "ignite",
  database: process.env.NODE_ENV === "test" ? "rentx_test" : "rentx",
  synchronize: false,
  logging: false,
  entities: [Category, Specification, User, Car, Rental, UserTokens],
  migrations: [
    CreateCategories1684318819296,
    CreateSpecifications1684776480368,
    CreateUsers1684783673463,
    AlterUserDeleteUsername1684952756366,
    AlterUserAddAvatar1685404829768,
    CreateCars1685700635823,
    CreateSpecificationsCars1686318064006,
    CreateCarImages1686492713259,
    CreateRentals1686494956424,
    CreateUsersToken1686590130963,
  ],
  subscribers: [],
  seeds: [MainSeeder],
};

const AppDataSource = new DataSource(options);

AppDataSource.initialize()
  .then(() => {
    console.log("Initialized");
  })
  .catch((error) => console.log(error));

export async function runMigrations() {
  try {
    await AppDataSource.initialize();
    await AppDataSource.runMigrations();

    console.log("Migrations executed successfully");
  } catch (error) {
    console.error("Error running migrations:", error);
  }
}

export async function closeConnection() {
  await AppDataSource.destroy();
}

export async function dropDatabase() {
  await AppDataSource.dropDatabase();
}

export default AppDataSource;
