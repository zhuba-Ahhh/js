function fib(n) {
  if (n < 3) return 1;
  let a = 1,
    b = 1;
  for (let i = 2; i < n; i++) {
    b = a + b;
    a = b - a;
  }
  return b;
}

function fib1(n) {
  if (n < 3) return 1;
  return fib1(n - 1) + fib1(n - 2);
}

let d = Date.now();
for (let i = 1; i < 100; i++) {
  console.log('F1', fib(i));
}
console.log('D1', Date.now() - d);

let d1 = Date.now();
for (let i = 1; i < 100; i++) {
  console.log('F2', fib1(i));
}
console.log('D2', Date.now() - d1);
