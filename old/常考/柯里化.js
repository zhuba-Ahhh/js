function Curring(func) {
  const arg = [];
  return function result(...rest) {
    if (!rest.length) return func(...arg);
    arg.push(...rest);
    return result;
  };
}

var curry = function (fn) {
  const argsList = [];
  return function curried(...args) {
    argsList.push(...args);
    if (argsList.length >= fn.length) {
      return fn(...argsList);
    }
    return curried;
  };
};

function Curring1(func) {
  return function curried(...args) {
    if (args.length >= func.length) {
      return func.apply(this, args);
    } else {
      return function (...args2) {
        return curried.apply(this, args.concat(args2));
      };
    }
  };
}

function add(a, b) {
  return a + b;
}
