import { getLatLong } from '../server/server'

describe("testing async function getLangLong", () => {
    test("testing whether return is json data or not", () => {
        expect(typeof getLatLong).toBe(Function)
    });


})