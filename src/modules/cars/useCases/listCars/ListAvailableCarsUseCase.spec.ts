import { CarsRepositoryInMemory } from "@modules/cars/repositories/in-memory/CarsRepositoryInMemory";

import { ListAvailableCarsUseCase } from "./ListAvailableCarsUseCase";

let listAvailableCarsUseCase: ListAvailableCarsUseCase;
let carsRepositoryInMemory: CarsRepositoryInMemory;

describe("List cars", () => {
  beforeEach(() => {
    carsRepositoryInMemory = new CarsRepositoryInMemory();
    listAvailableCarsUseCase = new ListAvailableCarsUseCase(
      carsRepositoryInMemory
    );
  });

  it("should be able to list all available cars", async () => {
    const car = await carsRepositoryInMemory.create({
      name: "Car1",
      description: "Car Description",
      daily_rate: 140.0,
      license_plate: "DEF-1212",
      fine_amount: 100,
      brand: "Car Brand",
      category_id: "category_id",
    });
    const cars = await listAvailableCarsUseCase.execute({});

    expect(cars).toEqual([car]);
  });

  it("should be able to list all available cars by name", async () => {
    const car = await carsRepositoryInMemory.create({
      name: "Car1",
      description: "Car Description",
      daily_rate: 140.0,
      license_plate: "DEF-1212",
      fine_amount: 100,
      brand: "Car Brand test",
      category_id: "category_id",
    });
    const cars = await listAvailableCarsUseCase.execute({
      name: "Car1",
    });

    expect(cars).toEqual([car]);
  });

  it("should be able to list all available cars by brand", async () => {
    const car = await carsRepositoryInMemory.create({
      name: "Car1",
      description: "Car Description",
      daily_rate: 140.0,
      license_plate: "DEF-1212",
      fine_amount: 100,
      brand: "Car Brand test",
      category_id: "category_id",
    });
    const cars = await listAvailableCarsUseCase.execute({
      brand: "Car Brand test",
    });

    expect(cars).toEqual([car]);
  });

  it("should be able to list all available cars by category_id", async () => {
    const car = await carsRepositoryInMemory.create({
      name: "Car1",
      description: "Car Description",
      daily_rate: 140.0,
      license_plate: "DEF-1212",
      fine_amount: 100,
      brand: "Car Brand test",
      category_id: "category_id",
    });
    const cars = await listAvailableCarsUseCase.execute({
      category_id: "category_id",
    });

    expect(cars).toEqual([car]);
  });
});
