/**
 * 子集
 * @param nums 整数数组
 * @returns 所有可能的子集
 */

// 方法一：回溯法
// 时间复杂度：O(2^n)，每个元素都有选择和不选择两种状态
// 空间复杂度：O(n)，递归调用栈的深度
export function subsets(nums: number[]): number[][] {
  const result: number[][] = [];
  const path: number[] = [];

  function backtrack(start: number) {
    result.push([...path]);

    for (let i = start; i < nums.length; i++) {
      path.push(nums[i]);
      backtrack(i + 1);
      path.pop();
    }
  }

  backtrack(0);
  return result;
}

// 方法二：位运算
// 时间复杂度：O(2^n)，需要遍历所有可能的状态
// 空间复杂度：O(1)，不需要递归调用栈
export function subsetsBit(nums: number[]): number[][] {
  const result: number[][] = [];
  const n = nums.length;
  const total = 1 << n; // 2^n

  for (let i = 0; i < total; i++) {
    const subset: number[] = [];
    for (let j = 0; j < n; j++) {
      if ((i & (1 << j)) !== 0) {
        subset.push(nums[j]);
      }
    }
    result.push(subset);
  }

  return result;
}
