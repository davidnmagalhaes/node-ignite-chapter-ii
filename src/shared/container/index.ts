import { container } from "tsyringe";

import { UsersRepository } from "@modules/accounts/repositores/implementations/UsersRepository";
import { IUserRepository } from "@modules/accounts/repositores/IUserRepository";
import { ICategoriesRepository } from "@modules/cars/repositories/ICategoriesRepository";
import { CategoriesRepository } from "@modules/cars/repositories/implementarions/CategoriesRepository";
import { SpecificationsRepository } from "@modules/cars/repositories/implementarions/SpecificationsRepository";
import { ISpecificationsRepository } from "@modules/cars/repositories/ISpecificationsRepository";

container.registerSingleton<ICategoriesRepository>(
  "CategoriesRepository",
  CategoriesRepository
);

container.registerSingleton<ISpecificationsRepository>(
  "SpecificationsRepository",
  SpecificationsRepository
);

container.registerSingleton<IUserRepository>(
  "UsersRepository",
  UsersRepository
);
