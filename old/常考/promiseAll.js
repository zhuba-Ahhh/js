function myAll(iterators) {
  const promises = Array.from(iterators);
  const values = [];
  return new Promise((resolve, reject) => {
    promises.forEach((p) => {
      p.then((data, err) => {
        if (err) {
          reject(err);
        }
        values.push(data);
        if (values.length === promises.length) {
          resolve(values);
        }
      });
    });
  });
}

function PromiseAll(promises) {
  const values = [];
  return new Promise((resolve, reject) => {
    promises.forEach((promise) => {
      promise.then((data, err) => {
        if (!err) reject(err);
        values.push(data);
        if (values.length === promises.length) {
          resolve(values);
        }
      });
    });
  });
}

// test
let p1 = new Promise(function (resolve, reject) {
  setTimeout(function () {
    resolve(1);
  }, 1000);
});
let p2 = new Promise(function (resolve, reject) {
  setTimeout(function () {
    resolve(2);
  }, 2000);
});
let p3 = new Promise(function (resolve, reject) {
  setTimeout(function () {
    resolve(3);
  }, 3000);
});
PromiseAll([p3, p1, p2]).then((res) => {
  console.log(res); // [3, 1, 2]
});
