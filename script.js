// 計算関数
function add(a, b) {
  return a + b;
}

// ブラウザ用：ボタン押下時に結果表示
if (typeof document !== "undefined") {
  const btn = document.getElementById("calcBtn");
  btn.addEventListener("click", () => {
    const n1 = Number(document.getElementById("num1").value);
    const n2 = Number(document.getElementById("num2").value);
    document.getElementById("result").textContent = add(n1, n2);
  });
}

// Node.js（Jest用）にエクスポート
if (typeof module !== "undefined" && module.exports) {
  module.exports = { add };
}
