import { Repository } from "typeorm";

import AppDataSource from "../../../../database";
import { Specification } from "../../entities/Specification";
import {
  ICreateSpecificationDTO,
  ISpecificationsRepository,
} from "../ISpecificationsRepository";

class SpecificationsRepository implements ISpecificationsRepository {
  private repository: Repository<Specification>;

  constructor() {
    this.repository = AppDataSource.getRepository(Specification);
  }

  async create({ name, description }: ICreateSpecificationDTO): Promise<void> {
    const specification = this.repository.create({
      description,
      name,
    });

    await this.repository.save(specification);
  }

  // list(): Category[] {
  //   return this.categories;
  // }

  // findByName(name: string): Category {
  //   const category = this.categories.find((category) => category.name === name);
  //   return category;
  // }
}

export { SpecificationsRepository };
