function fn1(x) {
  return x + 1;
}

function fn2(x) {
  return x + 2;
}

function fn3(x) {
  return x + 3;
}

function fn4(x) {
  return x + 4;
}

function compose(...fn) {
  return fn.reduce(
    (pre, cur) => {
      return (...args) => pre(cur(...args));
    },
    cur => cur
  );
}

console.log(compose(fn1, fn2, fn3, fn4)(1));
let fn = compose(fn1, fn2, fn3, fn4);
console.log(fn(1));
