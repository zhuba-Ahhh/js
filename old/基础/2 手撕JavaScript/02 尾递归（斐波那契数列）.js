function fibonacci(n) {
  return (function (n1, n2, i) {
    return i < n ? arguments.callee(n2, n1 + n2, i + 1) : n1;
  })(1, 1, 1);
}

function fibonacci1(n) {
  if (n < 2) return 1;
  let a = 1,
    b = 1;
  for (let i = 1; i < n; i++) {
    b += a;
    a = b - a;
  }
  return a;
}

console.log(fibonacci(100), fibonacci1(100));

let d1 = Date.now();
for (let i = 0; i < 1000; i++) {
  fibonacci(i);
}
console.log(Date.now() - d1);

d1 = Date.now();
for (let i = 0; i < 1000; i++) {
  fibonacci1(i);
}
console.log(Date.now() - d1);
