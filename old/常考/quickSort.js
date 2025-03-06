function quickSort(arr) {
  if (arr.length < 2) return arr;
  const left = [],
    right = [],
    cur = arr.splice(0, 1);
  for (let item of arr) item > cur ? right.push(item) : left.push(item);
  return quickSort(left).concat(cur, quickSort(right));
}

Array.prototype.quickSort = function () {
  let arr = this;
  if (arr.length < 2) return arr;
  const left = [],
    right = [],
    cur = arr.splice(0, 1);
  for (let item of arr) item > cur ? right.push(item) : left.push(item);
  return quickSort(left).concat(cur, quickSort(right));
};

Array.prototype.mySort = function () {
  //把arr[0]赋值给arr2,this指向arr
  var arr2 = [this[0]];
  for (var i = 0; i < this.length; i++) {
    if (arr2.indexOf(this[i]) == -1) {
      arr2.push(this[i]);
    }
  }
  //去重结束，开始排序
  arr2.sort((x, y) => {
    return x - y;
  });
  return arr2;
};
let arr = [1, 1, 2, 3, 4, 3, 4, 5, 3, 4, 6, 74, 3];
console.log(arr.mySort());
