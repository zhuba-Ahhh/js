const fs = require('fs');

// 原生fs 虽然短，但是会导致回调地狱
// fs.readFile('./md/将进酒.md', (err, data1) => {
//     fs.readFile('./md/蜀道难.md', (err, data2) => {
//         fs.readFile('./md/行路难.md', (err, data3) => {
//             console.log(data1 + '\r\n' + data2 + '\r\n' + data3);
//         })
//     })
// })

// 虽然长，但是在并非调用并列的函数，递归似时会比较适合
let p = new Promise((resolve, reject) => {
  fs.readFile('./md/将进酒.md', (err, data) => {
    if (err) {
      reject(err);
    }
    resolve(data);
  });
});

p.then(value => {
  return new Promise((reslove, reject) => {
    fs.readFile('./md/蜀道难.md', (err, data) => {
      if (err) {
        reject(err);
      }
      reslove([value, data]);
    });
  });
})
  .then(value => {
    return new Promise((reslove, reject) => {
      fs.readFile('./md/蜀道难.md', (err, data) => {
        if (err) {
          reject(err);
        }
        value.push(data);
        reslove(value);
      });
    });
  })
  .then(value => {
    console.log(value.join('\r\n'));
  });
