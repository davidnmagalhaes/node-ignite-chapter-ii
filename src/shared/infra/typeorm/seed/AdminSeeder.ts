import bcrypt from "bcrypt";
import { DataSource } from "typeorm";
import { Seeder, SeederFactoryManager } from "typeorm-extension";

import { User } from "../../../../modules/accounts/infra/typeorm/entities/User";

export class AdminSeeder implements Seeder {
  async run(
    dataSource: DataSource,
    factoryManager: SeederFactoryManager
  ): Promise<any> {
    const userRepository = dataSource.getRepository(User);

    const userData = {
      name: "Admin",
      email: "admin@admin.com",
      password: await bcrypt.hash("teste", 10),
      driver_license: "teste",
      isAdmin: true,
    };

    const newUser = userRepository.create(userData);
    await userRepository.save(newUser);
  }
}
