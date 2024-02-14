import app from "../src/server";
import request from "supertest";

describe("register", () => {
  it("should return status code 201 is name is passed", async () => {
    let res = await request(app).post("/register").send({ name: "Abhi" });
    expect(res.statusCode).toEqual(201);
  });

  it("returns status code 400 if name is missing", async () => {
    const res = await request(app).post("/register").send({});
    expect(res.statusCode).toEqual(400);
    expect(res.body).toEqual("You need to pass name");
  });
});

describe("POST /user", () => {
  describe("given a username and password", () => {
    it("should respond with a 200 status code", async () => {
      const response = await request(app).post("/user").send({
        username: "username",
        password: "password",
      });
      expect(response.statusCode).toBe(200);
    });

    it("should specify json in the content type header", async () => {
      const response = await request(app).post("/user").send({
        username: "username",
        password: "password",
      });
      expect(response.headers["content-type"]).toEqual(
        expect.stringContaining("application/json")
      );
    });

    it("response has userId", async () => {
      const response = await request(app).post("/user").send({
        username: "username",
        password: "password",
      });
      expect(response.body.userId).toEqual(1);
    });
  });

  describe("when the username and password is missing", () => {
    test("should response with a status code of 400", async () => {
      const bodyData = [{ username: "username" }, { password: "password" }, {}];
      for (const data of bodyData) {
        const response = await request(app).post("/user").send(data);
        expect(response.statusCode).toBe(400);
      }
    });
  });
});
