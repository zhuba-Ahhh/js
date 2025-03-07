/**
 * 全排列
 * @param nums 不含重复数字的数组
 * @returns 所有可能的排列
 */

// 方法一：回溯法
// 时间复杂度：O(n!)，其中 n 为数组长度
// 空间复杂度：O(n)，递归调用栈的深度
export function permute(nums: number[]): number[][] {
  const result: number[][] = [];
  const used = new Array(nums.length).fill(false);
  const path: number[] = [];

  function backtrack() {
    if (path.length === nums.length) {
      result.push([...path]);
      return;
    }

    for (let i = 0; i < nums.length; i++) {
      if (used[i]) continue;
      used[i] = true;
      path.push(nums[i]);
      backtrack();
      path.pop();
      used[i] = false;
    }
  }

  backtrack();
  return result;
}

// 方法二：递归交换
// 时间复杂度：O(n!)，其中 n 为数组长度
// 空间复杂度：O(n)，递归调用栈的深度
export function permuteSwap(nums: number[]): number[][] {
  const result: number[][] = [];

  function swap(arr: number[], i: number, j: number) {
    [arr[i], arr[j]] = [arr[j], arr[i]];
  }

  function permute(index: number) {
    if (index === nums.length - 1) {
      result.push([...nums]);
      return;
    }

    for (let i = index; i < nums.length; i++) {
      swap(nums, index, i);
      permute(index + 1);
      swap(nums, index, i);
    }
  }

  permute(0);
  return result;
}
