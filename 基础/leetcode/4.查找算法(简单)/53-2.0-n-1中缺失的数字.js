// 1.最简单的算法
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

// 2.哈希算法表

var search = function (nums, target) {
  const map = new Map();
  for (const item of nums) map[item] ? map[item]++ : (map[item] = 1);
  return map[target] || 0;
};

// 3.二分查找(递归版)

var search = function (nums, target) {
  const binarySearch = (left, right) => {
    if (left > right) return -1;
    const mid = Math.floor((left + right) / 2);
    if (target === nums[mid]) {
      return mid;
    }
    if (target < nums[mid]) {
      return binarySearch(left, mid - 1);
    }
    if (target > nums[mid]) {
      return binarySearch(mid + 1, right);
    }
  };
  const index = binarySearch(0, nums.length - 1);
  if (index == -1) return 0;
  let count = 0;
  for (let i = index; i < nums.length; i++) {
    if (target == nums[i]) {
      count++;
    } else {
      break;
    }
  }
  for (let i = index - 1; i >= 0; i--) {
    if (target == nums[i]) {
      count++;
    } else {
      break;
    }
  }
  return count;
};

// 4.二分查找(while版本)

var search = function (nums, target) {
  const binarySearch = (left, right) => {
    while (left <= right) {
      const mid = Math.floor((left + right) / 2);
      if (target == nums[mid]) {
        return mid;
      } else if (target > nums[mid]) {
        left = mid + 1;
      } else if (target < nums[mid]) {
        right = mid - 1;
      } else {
        return -1;
      }
    }
  };
  const index = binarySearch(0, nums.length - 1);
  if (index == -1) return 0;
  let count = 0;
  for (let i = index; i < nums.length; i++) {
    if (target == nums[i]) {
      count++;
    } else {
      break;
    }
  }
  for (let i = index - 1; i >= 0; i--) {
    if (target == nums[i]) {
      count++;
    } else {
      break;
    }
  }
  return count;
};
