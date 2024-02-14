import {
  add,
  test,
  mul,
  sub,
  nextInteger,
  firstElement,
  wordmatch,
  concat,
} from "../src/math";

describe("Math functions", () => {
  it("should add two numbers correctly", () => {
    expect(add(1, 2)).toEqual(3);
  });

  it("should add", () => {
    expect(test(1, 2)).toBe(3);
  });

  it("should throw error if type is string", () => {
    expect(test(1, 2)).toBe(3);
  });

  it("should divide x if >= 100", () => {
    expect(test(100, 1)).toBe(51);
  });
  it("should return total", () => {
    expect(mul(add(5, 5), sub(6, 2))).toBe(40);
  });
  it("should return next integer", () => {
    expect(nextInteger(10)).toBe(11);
  });
  it("should return first element in array", () => {
    expect(firstElement([1, 2, 3])).toBe(1);
  });
  it("should search for keyword in array", () => {
    expect(wordmatch(["apple", "banana", "bat"], "bat")).toBeTruthy();
  });
  it("should concat items in array", () => {
    expect(concat(["apple", "banana", "bat", "cat"])).toBe(
      "apple,banana,bat,cat"
    );
  });
});
