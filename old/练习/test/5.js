function qk(arr) {
  if (arr.length < 2) return arr;
  const left = [],
    right = [],
    cur = arr.splice(0, 1);
  for (let item of arr) item > cur ? right.push(item) : left.push(item);
  return qk(left).concat(cur, qk(right));
}

Array.prototype.qk = function () {
  let arr = this;
  if (arr.length < 2) return arr;
  const left = [],
    right = [],
    cur = arr.splice(0, 1);
  for (let item of arr) item > cur ? right.push(item) : left.push(item);
  return qk(left).concat(cur, qk(right));
};

let arr = [1, 1, 2, 3, 4, 3, 4, 5, 3, 4, 6, 74, 3];
console.log(arr.qk());

function PALL(args) {
  const Promises = Array.from(args),
    values = [],
    l = Promises.length;
  return new Promise((resolve, reject) => {
    Promises.forEach(promise => {
      promise.then((data, err) => {
        if (!err) reject(err);
        values.length === l ? resolve(values) : values.push(data);
      });
    });
  });
}

function PACE(args) {
  const Promises = Array.from(args),
    l = Promises.length;
  return new Promise((reslove, reject) => {
    for (let i = 0; i < l; i++) {
      Promises[i].then(reslove, reject);
    }
  });
}

Promise.race = function (args) {
  const Promises = Array.from(args),
    l = Promises.length;
  return new Promise((reslove, reject) => {
    for (let i = 0; i < l; i++) {
      Promises[i].then(reslove, reject);
    }
  });
};

function _flat(arr, depth) {
  if (!Array.isArray(arr) || depth < 1) return arr;
  return arr.reduce((pre, cur) => {
    if (Array.isArray(cur)) {
      return pre.concat(_flat(cur, depth - 1));
    } else {
      return pre.concat(cur);
    }
  }, []);
}
