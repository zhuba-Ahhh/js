function quickSort(arr) {
  if (arr.length <= 1) return arr;
  let left = [];
  let right = [];
  let current = arr.splice(0, 1);
  console.log(current);
  for (const item of arr) {
    if (item < current) {
      left.push(item);
    } else {
      right.push(item);
    }
  }
  return quickSort(left).concat(current, quickSort(right));
}

let arr = [1, 2, 5, 6, 3, 4, 6, 7, 8, 2, 4, 8, 9, 0, 6, 5, 4, 6, 7, 9, 9];

console.log(quickSort(arr));
