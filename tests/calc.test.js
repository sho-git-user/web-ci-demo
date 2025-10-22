const { add } = require("../script"); // script.js を読み込む

test("2 + 3 = 5", () => {
  expect(add(2, 3)).toBe(5);
});

test("負の数も計算できる", () => {
  expect(add(-1, -2)).toBe(-3);
});
