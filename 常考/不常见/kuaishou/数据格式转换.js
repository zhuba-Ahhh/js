const input = ['a', 'b', 'c', 'd', 'e', 'f'];

// function handler(arr) {
//   let prev = null;
//   for (let i = arr.length - 1; i >= 0; i--) {
//     prev = { [arr[i]]: prev };
//   }
//   return prev;
// }

function handler(arr) {
  return arr.reverse().reduce((prev, current) => {
    return { [current]: prev };
  }, null);
}

console.log(handler(input));