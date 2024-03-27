import * as math from "../math/math";


describe("sum", () => {
    it("Should add multiple numbers", () => {
        const result = math.sum(1, 2, 3, 4);
        expect(result).toBe(10);
    });

    it("Should return one number", () => {
        expect(math.sum(1)).toBe(1);
    });

    it("Should throw an error if the array is empty", () => {
        expect(() => {
            math.sum(...[])
        }).toThrow(math.EmptyArrayError);
    });

    it("Should return a NaN if undefined is passed", () => {
        expect(math.sum(undefined as any)).toBe(NaN);
    });
});



describe("sub", () => {
    it("Should sub multiple numbers", () => {
        const result = math.sub(100, 5, 5, 10);
        expect(result).toBe(80);
    });

    it("Should return 0 if an empty array is passed", () => {
        expect(math.sub(...[])).toBe(0);
    });

    it("Should throw an error if undefiend is passed", () => {
        expect(() => {
            math.sub(undefined as any)
        }).toThrow(math.EmptyArrayError);
    })
});


describe("multiply", () => {
    it("Should multiply multiple numbers", () => {
        expect(math.multiply(2, 10)).toBe(20);
    })
})