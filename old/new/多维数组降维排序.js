const arr1 = [
  [1, 2],
  [3, 4],
];
const arr2 = [
  [2, 3],
  [4, 5],
];
const arr3 = [
  [5, 6],
  [7, 7],
];

function addArr(arr1, ...arrs) {
  const combinedArr = arr1.concat(arrs);
  const flattenedArr = combinedArr.flat(Infinity);
  const uniqueArr = [...new Set(flattenedArr)];

  return uniqueArr.sort((a, b) => a - b);
}

console.log(addArr(arr1, arr2, arr3));
