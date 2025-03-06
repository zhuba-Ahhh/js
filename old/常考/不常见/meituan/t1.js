// 给定一个无重复元素的整数数组nums,找出其中没有出现的最小正整数
// 空间复杂度O(1),时间复杂度O(n)
// input:[1,0,2] -> output:3
// input:[-2,3,4,1,5] -> output:2

let nums = [-2, 3, 4, 1, 5];
let findMaxValue = (arr) => {
  const n = arr.length;

  for (let i = 0; i < n; i++) {
    // 将元素放置到正确的位置上
    while (arr[i] > 0 && arr[i] <= n && arr[arr[i] - 1] !== arr[i]) {
      const temp = arr[arr[i] - 1];
      arr[arr[i] - 1] = arr[i];
      arr[i] = temp;
    }
  }

  // 找到第一个缺失的正整数
  for (let i = 0; i < n; i++) {
    if (arr[i] !== i + 1) {
      return i + 1;
    }
  }

  // 如果所有的正整数都出现了，则返回n+1
  return n + 1;
};

console.log(findMaxValue(nums));
