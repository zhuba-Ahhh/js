function MyPromiseAll(_promises) {
  return new Promise((resolve, reject) => {
    const promises = Array.from(_promises);
    const len = promises.length;
    const r = [];
    let count = 0;
    for (let i = 0; i < len; i++) {
      Promise.resolve(promises[o])
        .then((res) => {
          r[i] = res;
          if (len == ++count) {
            resolve(r);
          }
        })
        .catch((e) => {
          reject(r);
        });
    }
  });
}
