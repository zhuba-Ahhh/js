function flatten2_1(arr, n = 1) {
  return arr.reduce((pre, next) => {
    let time = n;
    console.log(next, time);
    return pre.concat(
      Array.isArray(next) && time > 0 ? flatten2_1(next, time - 1) : next
    );
  }, []);
}
// let arr = [1, [2, [3, 4]]];
// console.log(flatten2_1(arr));

function QS(arr) {
  if (arr.length < 2) return arr;
  const cur = arr.splice(0, 1);
  (left = []), (right = []);
  for (let item of arr) item > cur ? right.push(item) : left.push(item);

  return QS(left).concat(cur, QS(right));
}

// let arr1 = [1, 3, 2, 4, 1, 2, 3, 5, 6];
// console.log(QS(arr1));

function removeSameItem(arr) {
  // return [...new Set(arr)];

  // let res = [];
  // for (let item of arr) {
  //   if (!res.includes(item)) res.push(item);
  // }

  // return res;

  // let res = [];
  // for (let item of arr) {
  //   if (res.indexOf(item) == -1) res.push(item);
  // }

  // return res;

  // let res = [];
  // arr.map((item) => {
  //   if (res.indexOf(item) == -1) res.push(item);
  // })

  // return res;

  // let res = [];
  // arr.map((item) => {
  //   if (!res.includes(item)) res.push(item);
  // })

  // return res;

  let map = new Map();
  let res = [];
  arr.map(item => {
    if (!map.get(item)) {
      map.set(item, 1);
      res.push(item);
    }
  });

  return res;
}

let arr2 = [2, 1, 1, 2, 3, 1, 2, 3];
console.log(removeSameItem(arr2.sort((a, b) => a - b)));

// 2 3 4 6 5 1
setTimeout(() => {
  console.log(1);
});

console.log(2);

new Promise(reslove => {
  console.log(3);
  reslove();
  console.log(4);
}).then(() => {
  console.log(5);
});

console.log(6);
