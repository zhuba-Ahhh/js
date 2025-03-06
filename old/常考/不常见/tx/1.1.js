//  每隔一秒打印一个，最后打印6
const arrConsole = (arr, fn) => {
  let firstTime = new Date();
  for (let i = 0; i < arr.length; i++) {
    setTimeout(() => {
      if (!Number.isNaN(arr[i])) {
        console.log(arr[i], new Date() - firstTime);
      } else {
        arr[i]();
      }
    }, 1000 * i);
  }

  setTimeout(() => {
    fn();
    console.log(new Date() - firstTime);
  }, 1000 * arr.length);
};

arrConsole([1, 2, 3, 4, 5], () => {
  console.log(6);
});

// await arrConsole([1, 2, 3, 4, 5]);
// console.log(6);
function formatNumber(str) {
  let arr = [],
    count = str.length;

  while (count >= 3) {
    arr.unshift(str.slice(count - 3, count));
    count -= 3;
  }
  str.length % 3 && arr.unshift(str.slice(0, str.length % 3));

  return arr.toString();
}
console.log(formatNumber('1234567890')); // 1,234,567,890

function formatNumber(str) {
  // ["0", "9", "8", "7", "6", "5", "4", "3", "2", "1"]
  return str
    .split('')
    .reverse()
    .reduce((prev, next, index) => {
      return (index % 3 ? next : next + ',') + prev;
    });
}
(123456789).toLocaleString('en-US'); // 1,234,567,890
