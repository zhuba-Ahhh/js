/**
 * 打家劫舍
 * @param nums 每个房屋存放金额的非负整数数组
 * @returns 能偷窃到的最高金额
 */

// 方法一：动态规划
// 时间复杂度：O(n)，只需遍历一次数组
// 空间复杂度：O(1)，只需要常数级额外空间
export function rob(nums: number[]): number {
  if (nums.length === 0) return 0;
  if (nums.length === 1) return nums[0];

  let prevTwo = nums[0];
  let prevOne = Math.max(nums[0], nums[1]);

  for (let i = 2; i < nums.length; i++) {
    const current = Math.max(prevOne, prevTwo + nums[i]);
    prevTwo = prevOne;
    prevOne = current;
  }

  return prevOne;
}

// 方法二：记忆化搜索
// 时间复杂度：O(n)，每个状态只计算一次
// 空间复杂度：O(n)，需要递归调用栈的空间
export function robMemo(nums: number[]): number {
  const memo = new Map<number, number>();

  function rob(index: number): number {
    if (index >= nums.length) return 0;
    if (memo.has(index)) return memo.get(index)!;

    const result = Math.max(rob(index + 1), rob(index + 2) + nums[index]);
    memo.set(index, result);
    return result;
  }

  return rob(0);
}
