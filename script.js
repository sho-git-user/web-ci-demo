function add(a, b) {
  return a + b;
}

console.log("2 + 3 =", add(2, 3));
module.exports = add; // Node.jsでもテスト可能
