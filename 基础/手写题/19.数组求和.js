// let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// let sum = arr.reduce((a, b) => {
//     return a + b;
// }, 0);

// console.log(sum)

arr = [1, 2, 3, [
    [4, 5], 6
], 7, 8, 9];
console.log(arr.flat(2));