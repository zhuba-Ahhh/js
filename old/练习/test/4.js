const p1 = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve("66666");
  }, 300);
});
const p2 = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve("77777");
  }, 200);
});
const p3 = new Promise((resolve, reject) => {
  setTimeout(() => {
    reject("88888");
  }, 200);
});

Promise.MyAll = function (promises) {
  let arr = [],
    l = promises.length,
    cnt = 0;
  return new Promise((resolve, reject) => {
    promises.forEach((item, index) => {
      Promise.resolve(item)
        .then((res) => {
          arr[index] = res;
          cnt++;
          if (cnt === l) resolve(arr);
        })
        .catch((err) => reject(err));
    });
  });
};

Promise.MyAll([p1, p2])
  .then((res) => console.log(res))
  .catch((err) => console.log(err));
Promise.MyAll([p1, p3])
  .then((res) => console.log(res))
  .catch((err) => console.log(err));

Promise.MyRace = function (promises) {
  return new Promise((resolve, reject) => {
    for (const promise of promises)
      Promise.resolve(promise).then(resolve, reject);
  });
};

Promise.race([p1, p2])
  .then((res) => console.log(res))
  .catch((err) => console.log(err));
Promise.race([p1, p3])
  .then((res) => console.log(res))
  .catch((err) => console.log(err));

Promise.MayAny = function (promises) {
  let arr = [],
    l = promises.length,
    cnt = 0;
};
