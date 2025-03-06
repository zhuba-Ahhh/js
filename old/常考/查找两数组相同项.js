function compare(a, b) {
  return a.filter(item => {
    // return b.indexOf(item) !== -1;
    return b.includes(item);
  });
}

function compare1(a, b) {
  let res = [];
  for (let item of a) {
    for (let item1 of b) {
      if (item === item1)
        // res.push(item);
        // res = [...res, item]
        res = res.concat([item]);
    }
  }

  return res;
}

let arr = [1, 2, 3];
let arr1 = [2, 3, 4];

console.log(compare(arr, arr1));
console.log(compare1(arr, arr1));

let res = new Array(10).fill(0).map((_, index) => index);
console.log(res);
