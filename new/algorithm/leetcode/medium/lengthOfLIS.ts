/**
 * 最长递增子序列
 * @param nums 整数数组
 * @returns 最长严格递增子序列的长度
 */

// 方法一：动态规划
// 时间复杂度：O(n²)，需要两层循环
// 空间复杂度：O(n)，需要一个数组存储每个位置的最长递增子序列长度
export function lengthOfLIS(nums: number[]): number {
  if (nums.length === 0) return 0;

  const dp = new Array(nums.length).fill(1);
  let maxLength = 1;

  for (let i = 1; i < nums.length; i++) {
    for (let j = 0; j < i; j++) {
      if (nums[i] > nums[j]) {
        dp[i] = Math.max(dp[i], dp[j] + 1);
      }
    }
    maxLength = Math.max(maxLength, dp[i]);
  }

  return maxLength;
}

// 方法二：贪心 + 二分查找
// 时间复杂度：O(nlogn)，遍历数组时进行二分查找
// 空间复杂度：O(n)，需要一个数组存储递增子序列
export function lengthOfLISOptimized(nums: number[]): number {
  if (nums.length === 0) return 0;

  const tails = [nums[0]];

  for (let i = 1; i < nums.length; i++) {
    if (nums[i] > tails[tails.length - 1]) {
      tails.push(nums[i]);
    } else {
      let left = 0;
      let right = tails.length - 1;

      while (left < right) {
        const mid = Math.floor((left + right) / 2);
        if (tails[mid] < nums[i]) {
          left = mid + 1;
        } else {
          right = mid;
        }
      }
      tails[left] = nums[i];
    }
  }

  return tails.length;
}
