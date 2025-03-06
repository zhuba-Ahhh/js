/**
 * 最大子数组和
 * @param nums 输入数组
 * @returns 返回最大子数组和
 */

// 方法一：动态规划
// 时间复杂度：O(n)，只需遍历一次数组
// 空间复杂度：O(1)，只需要常数级额外空间
export function maxSubArray(nums: number[]): number {
  if (nums.length === 0) return 0;

  let maxSum = nums[0];
  let currentSum = nums[0];

  for (let i = 1; i < nums.length; i++) {
    currentSum = Math.max(nums[i], currentSum + nums[i]);
    maxSum = Math.max(maxSum, currentSum);
  }

  return maxSum;
}

// 方法二：分治法
// 时间复杂度：O(nlogn)，需要递归处理数组
// 空间复杂度：O(logn)，递归调用栈的深度
export function maxSubArrayDivideConquer(nums: number[]): number {
  if (nums.length === 0) return 0;

  function findMaxCrossingSum(
    nums: number[],
    left: number,
    mid: number,
    right: number
  ): number {
    let leftSum = -Infinity;
    let sum = 0;
    for (let i = mid; i >= left; i--) {
      sum += nums[i];
      leftSum = Math.max(leftSum, sum);
    }

    let rightSum = -Infinity;
    sum = 0;
    for (let i = mid + 1; i <= right; i++) {
      sum += nums[i];
      rightSum = Math.max(rightSum, sum);
    }

    return leftSum + rightSum;
  }

  function findMaxSubArray(
    nums: number[],
    left: number,
    right: number
  ): number {
    if (left === right) return nums[left];

    const mid = Math.floor((left + right) / 2);
    const leftSum = findMaxSubArray(nums, left, mid);
    const rightSum = findMaxSubArray(nums, mid + 1, right);
    const crossSum = findMaxCrossingSum(nums, left, mid, right);

    return Math.max(leftSum, rightSum, crossSum);
  }

  return findMaxSubArray(nums, 0, nums.length - 1);
}

// 方法三：Kadane算法
// 时间复杂度：O(n)，只需遍历一次数组
// 空间复杂度：O(1)，只需要常数级额外空间
export function maxSubArrayKadane(nums: number[]): number {
  if (nums.length === 0) return 0;

  let maxSoFar = nums[0];
  let maxEndingHere = nums[0];

  for (let i = 1; i < nums.length; i++) {
    maxEndingHere = Math.max(nums[i], maxEndingHere + nums[i]);
    maxSoFar = Math.max(maxSoFar, maxEndingHere);
  }

  return maxSoFar;
}
