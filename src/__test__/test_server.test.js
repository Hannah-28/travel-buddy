const app = require("../server/server");
const supertest = require("supertest");
const request = supertest(app);

describe("Endpoint test", () => {
    it("/servertest", async(done) => {
        const response = await request.get("/servertest");
        expect(response.status).toBe(200);
        done();
    });
});