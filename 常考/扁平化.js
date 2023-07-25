let arr = [1, [2, [3, 4]]];

// === 原生flat
var flatOne = function (arr, n) {
  if (n < 1) {
      return arr;
  }

  const res = [];
  for (let item of arr) {
      if (Array.isArray(item)) {
          res.push(...flat(item, n - 1));
      } else {
          res.push(item);
      }
  }

  return res;
};

function flatten1(arr) {
  while (arr.some(item => Array.isArray(item))) {
    arr = [].concat(...arr);
  }
  return arr;
}
console.log(flatten1(arr)); //  [1, 2, 3, 4，5]

function flatten2(arr) {
  return arr.reduce(function (prev, next) {
    return prev.concat(Array.isArray(next) ? flatten2(next) : next)
  }, [])
}
console.log(flatten2(arr)); //  [1, 2, 3, 4，5]

function flatten2_1(arr, n = 1) {
  return arr.reduce((pre, next) => {
    let time = n
    return pre.concat(Array.isArray(next) && n > 0 ? flatten2_1(next, time - 1) : next)
  }, [])
}

console.log(flatten2_1(arr));

function flatten3(arr) {
  let result = [];
  for (let i = 0; i < arr.length; i++) {
    if (Array.isArray(arr[i])) {
      result = result.concat(flatten(arr[i]));
    } else {
      result.push(arr[i]);
    }
  }
  return result;
}
flatten3(arr); //  [1, 2, 3, 4，5]

function flatten4(arr) {
  return arr.toString().split(',');
}
console.log(flatten4(arr)); //  [1, 2, 3, 4，5]

function flatten5(arr) {
  return arr.flat(Infinity); // 无论多少层都扁平
}
console.log(flatten5(arr)); //  [1, 2, 3, 4，5]