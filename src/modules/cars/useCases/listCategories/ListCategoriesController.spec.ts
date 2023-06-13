import { hash } from "bcrypt";
import request from "supertest";

import { User } from "@modules/accounts/infra/typeorm/entities/User";

import { app } from "../../../../shared/infra/http/app";
import AppDataSource, {
  closeConnection,
  dropDatabase,
  runMigrations,
} from "../../../../shared/infra/typeorm";

describe("Create category controller", () => {
  beforeAll(async () => {
    await runMigrations();
    const userRepository = AppDataSource.getRepository(User);

    const userData = {
      name: "Admin",
      email: "admin@admin.com",
      password: await hash("teste", 10),
      driver_license: "teste",
      isAdmin: true,
    };

    const newUser = userRepository.create(userData);
    await userRepository.save(newUser);
  });

  afterAll(async () => {
    await dropDatabase();
    await closeConnection();
  });

  it("should be able to list all categories", async () => {
    const responseToken = await request(app).post("/sessions").send({
      email: "admin@admin.com",
      password: "teste",
    });

    const { refresh_token } = responseToken.body;

    await request(app)
      .post("/categories")
      .send({
        name: "Category Supertest",
        description: "Category Supertest",
      })
      .set({
        Authorization: `Bearer ${refresh_token}`,
      });

    const response = await request(app).get("/categories");

    expect(response.status).toBe(200);
    expect(response.body.length).toBe(1);
    expect(response.body[0]).toHaveProperty("id");
    expect(response.body[0].name).toEqual("Category Supertest");
  });
});
