const arr = [1, 2, 3, 344, 2, 2, 2, 2, 2, 2, 2, 2, 2, 22, 2, 2, 2, 1];

// function removeSameItem(arr) {
//     return Array.from(new Set(arr));
// }

// function removeSameItem(arr) {
//     let result = [];
//     for (const item of arr) {
//         if (result.indexOf(item) == -1) {
//             result.push(item)
//         }
//     }
//     return result;
// }

// function removeSameItem(arr) {
//   let result = [];
//   let map = new Map();
//   for (const item of arr) {
//     if (!map.has(item)) {
//       result.push(item);
//       map.set(item, item);
//     }
//   }
//   return result
// }

console.log(removeSameItem(arr));
