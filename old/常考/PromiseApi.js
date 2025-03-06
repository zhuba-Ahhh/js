const p1 = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve("66666")
  }, 300)
});
const p2 = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve("77777")
  }, 200)
});
const p3 = new Promise((resolve, reject) => {
  setTimeout(() => {
    reject("88888")
  }, 200)
});

Promise.MyAll = function (promises) { // 接收一个数组
  let arr = [],
    cnt = 0
  return new Promise((resolve, reject) => { // 返回一个新的 promise实例
    promises.forEach((item, i) => {
      Promise.resolve(item) //用类方法 resolve()的.then收集resolve结果
        .then(res => {
          arr[i] = res
          cnt++
          if (cnt === promises.length) { //判断是否全部成功
            resolve(arr)
          }
        })
        .catch(reject)
    })
  })
}

Promise.MyAll([p1, p2]).then(res => console.log(res)).catch(err => console.log(err))
Promise.MyAll([p1, p3]).then(res => console.log(res)).catch(err => console.log(err))
//88888
//["66666", "77777"]

let PromiseAll = function (promises) {
  let arr = [],
    cnt = 0,
    l = promises.length;
  return new Promise((resolve, reject) => {
    promises.forEach((item, index) => {
      Promise.resolve(item).then(res => {
        arr[index] = res;
        cnt++;
        if (cnt === l) {
          resolve(arr);
        };
      }).catch(reject);
    })
  })
}

PromiseAll([p1, p2]).then(res => console.log(res)).catch(err => console.log(err))
PromiseAll([p1, p3]).then(res => console.log(res)).catch(err => console.log(err))

Promise.race = function (promises) {
  return new Promise((resolve, reject) => {
    for (const item of promises) {
      Promise.resolve(item).then(resolve, reject)
    }
  })
}

Promise.race([p1, p2]).then(res => console.log(res)).catch(err => console.log(err))
Promise.race([p1, p3]).then(res => console.log(res)).catch(err => console.log(err))
//77777
//88888

let PromiseRace = function (promises) {
  return new Promise((resolve, reject) => {
    for (const item of promises) {
      Promise.resolve(item).then(resolve, reject)
    }
  })
}

PromiseRace([p1, p2]).then(res => console.log(res)).catch(err => console.log(err))
PromiseRace([p1, p3]).then(res => console.log(res)).catch(err => console.log(err))
//77777
//88888

Promise.MyAny = function (promises) {
  let arr = [],
    cnt = 0;
  return new Promise((resolve, reject) => {
    promises.forEach((item, i) => {
      Promise.resolve(item).then(resolve, err => {
        arr[i] = {
          status: "reject",
          value: err
        }
        cnt++;
        if (cnt === promises.length) {
          reject(new Error('没有promise成功'))
        }
      })
    })
  })
}

Promise.MyAny([p1, p2]).then(res => console.log(res)).catch(err => console.log(err))
//77777
Promise.MyAny([p1, p3]).then(res => console.log(res)).catch(err => console.log(err))
//66666

let PromiseAny = function (promises) {
  let arr = [],
    l = promises.length,
    cnt = 0;
  return new Promise((resolve, reject) => {
    promises.forEach((item, index) => {
      Promise.resolve(item).then(resolve, err => {
        arr[index] = {
          status: "reject",
          value: err
        }
        cnt++;
        if (cnt === l) {
          reject(new Error('没有promise成功'))
        }
      })
    })
  })
}

PromiseAny([p1, p2]).then(res => console.log(res)).catch(err => console.log(err))
//77777
PromiseAny([p1, p3]).then(res => console.log(res)).catch(err => console.log(err))
//66666


Promise.allSettled = function (promises) {
  let arr = [],
    cnt = 0,
    l = promises.length;
  return new Promise((resolve, reject) => {
    promises.forEach((item, index) => {
      Promise.resolve(item)
        .then(res => {
          arr[index] = {
            status: 'fulfilled',
            value: res
          }
          cnt++
          if (cnt === l) resolve(arr)
        })
        .catch(err => {
          arr[index] = {
            status: 'rejected',
            value: err
          }
          cnt++
          if (cnt === l) reject(err)
        })
    })
  })
}

Promise.allSettled([p1, p2]).then(res => console.log(res)).catch(err => console.log(err))
Promise.allSettled([p1, p3]).then(res => console.log(res)).catch(err => console.log(err))

let PromiseAllSettled = function (promises) {
  let arr = [],
    cnt = 0,
    l = promises.length;
  return new Promise((resolve, reject) => {
    promises.forEach((item, index) => {
      Promise.resolve(item)
        .then(res => {
          arr[index] = {
            status: 'fulfilled',
            value: res
          }
          cnt++
          if (cnt === l) resolve(arr)
        })
        .catch(err => {
          arr[index] = {
            status: 'rejected',
            value: err
          }
          cnt++
          if (cnt === l) reject(err)
        })
    })
  })
}

PromiseAllSettled([p1, p2]).then(res => console.log(res)).catch(err => console.log(err))
PromiseAllSettled([p1, p3]).then(res => console.log(res)).catch(err => console.log(err))