import { travelDuration } from "../client/js/app.js"

describe("testing datedifference function", () => {
    const travelDate = "2020-06-01";
    const endDate = "2020-06-10";
    test("testing the travelDuration function", () => {
        expect(travelDuration(travelDate, endDate)).toBe(9);
    })
})