let arr = [1, 2, 2, 2, 3, 3, 4];
// 输出重复值 【2，2，3】

function find(arr) {
  const ans = [];
  for (let i = 0, l = arr.length; i < l; i++) {
    if (arr.lastIndexOf(arr[i]) !== i) {
      ans.push(arr[i]);
    }
  }
  return ans;
}
console.log(find(arr));

function find1(arr) {
  const ans = [];
  arr.sort((a, b) => a - b);
  for (let i = 0, l = arr.length; i < l - 1; i++) {
    if (arr[i] === arr[i + 1]) {
      ans.push(arr[i]);
    }
  }
  return ans;
}
console.log(find1(arr));

function sleep(tiem) {
  return new Promise((resolve) => {
    setTimeout(() => {
      return resolve();
    }, tiem);
  });
}
let D = Date.now();
async function p() {
  await sleep(1000);
  console.log();
  console.log(Date.now() - D, "ms...", 1);
}
p();
