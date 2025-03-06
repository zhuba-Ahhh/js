let data = '{a=1&b=2}';

let res = data.split('&').join(',');
let res1 = data.replace(/\&/, ','); // 只换一个
let res11 = data.replace(/\&/g, ','); // == replaceAll

console.log(res, res1, res11);

let arr = data.split('&');
let Obj = {};
for (let item of arr) {
  console.log(item);
}
