// 暴力法
var search = function (nums, target) {
  let count = 0;
  for (const item of nums) {
    if (item > target) break;
    if (item === target) {
      count++;
    }
  }
  return count;
};
