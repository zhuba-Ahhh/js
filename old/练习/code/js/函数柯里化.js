// 处理函数 阶乘
function multiplicative(...args) {
  return 1 * args.reduce((pre, cur) => pre * cur);
}
console.log(multiplicative(1, 2, 3, 4, 5));

// Curring
function Curring(func) {
  let args = [];
  return function result(...rest) {
    if (!rest.length) return func(...args);
    // args.push(...rest);
    // args = [...args, ...rest];
    args = args.concat(rest);
    return result; //递归调用函数
  };
}
// test
// Curring(func(参数)());
console.log(Curring(multiplicative)(1, 2, 3, 4)(5)(6)());

// 和函数
function sum(...rest) {
  return rest.reduce((pre, cur) => pre + cur);
}
console.log(sum(11, 11, 11));

function Curring1(func) {
  let args = [];
  return function result(...rest) {
    if (!rest.length) return func(...args);
    args.push(...rest);
    return result;
  };
}
console.log(Curring1(sum)(1, 1, 1, 1)(1, 1)());

function myCurried(fn) {
  return function curry(...args1) {
    if (fn.length <= args1.length) {
      return fn.apply(this, args1);
    } else {
      return function (...args2) {
        return curry.apply(this, [...args1, ...args2]);
      };
    }
  };
}

function fn(x, y, z, j, k) {
  return x + y + z + j + k;
}
let func = myCurried(fn);
console.log(func(1)(2)(3)(4)(5));

function cl(fn) {
  let arg = [];
  return function result(...rest) {
    if (!rest.length) return fn(arg);
    arg = [...arg, ...rest];
    return result;
  };
}
