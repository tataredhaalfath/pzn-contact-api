import supertest from "supertest";
import { web } from "../src/application/web.js";
import { prismaClient } from "../src/application/database";
import { logger } from "../src/application/logging.js";

describe("POST /api/users", function () {
  afterEach(async () => {
    await prismaClient.user.deleteMany({
      where: {
        username: "redha",
      },
    });
  });

  it("should can register", async () => {
    const result = await supertest(web).post("/api/users").send({
      username: "redha",
      password: "rahasia",
      name: "tata redha",
    });

    expect(result.status).toBe(200);
    expect(result.body.data.username).toBe("redha");
    expect(result.body.data.name).toBe("tata redha");
    expect(result.body.password).toBeUndefined();
  });

  it("should reject if requires is invalid", async () => {
    const result = await supertest(web).post("/api/users").send({
      username: "",
      password: "",
      name: "",
    });

    logger.info(result.body);
    expect(result.status).toBe(400);
    expect(result.body.errors).toBeDefined();
  });

  it("should reject if username already registered", async () => {
    let result = await supertest(web).post("/api/users").send({
      username: "redha",
      password: "rahasia",
      name: "tata redha",
    });

    logger.info(result.body);

    expect(result.status).toBe(200);
    expect(result.body.data.username).toBe("redha");
    expect(result.body.data.name).toBe("tata redha");
    expect(result.body.password).toBeUndefined();

    result = await supertest(web).post("/api/users").send({
      username: "redha",
      password: "rahasia",
      name: "tata redha",
    });

    logger.info(result.body);

    expect(result.status).toBe(400);
    expect(result.body.errors).toBeDefined();
  });
});
