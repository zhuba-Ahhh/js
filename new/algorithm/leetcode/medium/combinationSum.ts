/**
 * 组合总和
 * @param candidates 无重复元素的数组
 * @param target 目标和
 * @returns 所有可以使数字和为目标数的组合
 */

// 方法：回溯法
// 时间复杂度：O(n^target)，其中 n 为 candidates 数组的长度
// 空间复杂度：O(target)，递归调用栈的深度
export function combinationSum(
  candidates: number[],
  target: number
): number[][] {
  const result: number[][] = [];
  const path: number[] = [];

  function backtrack(start: number, remain: number) {
    if (remain === 0) {
      result.push([...path]);
      return;
    }

    for (let i = start; i < candidates.length; i++) {
      if (candidates[i] > remain) continue;

      path.push(candidates[i]);
      // 因为每个数字可以重复使用，所以下一次仍从当前位置开始
      backtrack(i, remain - candidates[i]);
      path.pop();
    }
  }

  // 先对数组排序，方便剪枝
  candidates.sort((a, b) => a - b);
  backtrack(0, target);
  return result;
}

// 方法二：回溯法（带去重）
// 时间复杂度：O(n^target)，其中 n 为 candidates 数组的长度
// 空间复杂度：O(target)，递归调用栈的深度
export function combinationSum2(
  candidates: number[],
  target: number
): number[][] {
  const result: number[][] = [];
  const path: number[] = [];

  function backtrack(start: number, remain: number) {
    if (remain === 0) {
      result.push([...path]);
      return;
    }

    let pre = -1; // 记录上一个使用的数字
    for (let i = start; i < candidates.length; i++) {
      const cur = candidates[i];
      // 剪枝：跳过重复的数字和大于剩余目标值的数字
      if (cur > remain || cur === pre) continue;
      pre = cur;

      path.push(cur);
      // 因为每个数字只能使用一次，所以下一次从下一个位置开始
      backtrack(i + 1, remain - cur);
      path.pop();
    }
  }

  // 先对数组排序，方便剪枝和去重
  candidates.sort((a, b) => a - b);
  backtrack(0, target);
  return result;
}
