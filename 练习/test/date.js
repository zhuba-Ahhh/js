function timeCount(fn) {
  let time1 = Date.now();
  fn();
  console.log(Date.now() - time1, "ms");
}

const p1 = new Promise((resolve) => {
  setTimeout(() => {
    resolve('resolve3');
    console.log('timer1')
  }, 0)
  resolve('resovle1');
  resolve('resolve2');
}).then(res => {
  console.log(res)
  setTimeout(() => {
    console.log(p1)
  }, 1000)
}).finally(res => {
  console.log('finally', res)
})

let obj1 = JSON.parse(JSON.stringify(obj))

console.log(obj1);
obj1.b = 22
obj1.c.c = 11
console.log(obj);

function deepClone(obj) {
  let objClone = Array.isArray(obj) ? [] : {}
  for (let key of Object.keys(obj)) {
    objClone[key] = (typeof obj[key] === 'object' ? deepClone(obj[key]) : obj[key])
  }
  return objClone
}
console.log(deepClone(obj))