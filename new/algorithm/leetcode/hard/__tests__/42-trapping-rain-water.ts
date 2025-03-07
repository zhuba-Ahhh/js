/**
 * @tag 数组
 * @tag 双指针
 * @tag 动态规划
 * @tag 单调栈
 * @difficulty 困难
 * @summary 给定 n 个非负整数表示每个宽度为 1 的柱子的高度图，计算按此排列的柱子，下雨之后能接多少雨水。
 * @description
 * 给定 n 个非负整数表示每个宽度为 1 的柱子的高度图，计算按此排列的柱子，下雨之后能接多少雨水。
 *
 * @example
 * 输入：height = [0,1,0,2,1,0,1,3,2,1,2,1]
 * 输出：6
 * 解释：上面是由数组 [0,1,0,2,1,0,1,3,2,1,2,1] 表示的高度图，在这种情况下，可以接 6 个单位的雨水。
 *
 * @example
 * 输入：height = [4,2,0,3,2,5]
 * 输出：9
 *
 * @constraints
 * - n == height.length
 * - 1 <= n <= 2 * 10^4
 * - 0 <= height[i] <= 10^5
 *
 * @param height 表示柱子高度的数组
 * @returns 可以接的雨水量
 */

// 解法1：暴力解法
// 对于数组中的每个元素，我们找出下雨后水能达到的最高位置，等于两边最大高度的较小值减去当前高度的值。
// 时间复杂度：O(n²)，对于每个元素都要向左和向右扫描。
// 空间复杂度：O(1)，只需要常数空间。
export function trap(height: number[]): number {
  const n = height.length;
  if (n <= 2) return 0;
  let result = 0;

  // 第一个和最后一个位置不会接水
  for (let i = 1; i < n - 1; i++) {
    let leftMax = 0;
    let rightMax = 0;

    // 找出左边最高的柱子
    for (let j = 0; j < i; j++) {
      leftMax = Math.max(leftMax, height[j]);
    }

    // 找出右边最高的柱子
    for (let j = i + 1; j < n; j++) {
      rightMax = Math.max(rightMax, height[j]);
    }

    // 计算当前位置能接的雨水量
    const minHeight = Math.min(leftMax, rightMax);
    if (minHeight > height[i]) {
      result += minHeight - height[i];
    }
  }

  return result;
}

// 解法2：动态规划
// 提前存储每个位置左右两边最大高度，避免重复计算。
// 时间复杂度：O(n)，需要遍历数组三次。
// 空间复杂度：O(n)，需要额外的数组存储每个位置左右两边最大高度。
export function trapDP(height: number[]): number {
  const n = height.length;
  if (n <= 2) return 0;

  const leftMax = new Array(n).fill(0);
  const rightMax = new Array(n).fill(0);
  let result = 0;

  // 计算每个位置左边最大高度
  leftMax[0] = height[0];
  for (let i = 1; i < n; i++) {
    leftMax[i] = Math.max(leftMax[i - 1], height[i]);
  }

  // 计算每个位置右边最大高度
  rightMax[n - 1] = height[n - 1];
  for (let i = n - 2; i >= 0; i--) {
    rightMax[i] = Math.max(rightMax[i + 1], height[i]);
  }

  // 计算每个位置能接的雨水量
  for (let i = 0; i < n; i++) {
    const minHeight = Math.min(leftMax[i], rightMax[i]);
    if (minHeight > height[i]) {
      result += minHeight - height[i];
    }
  }

  return result;
}

// 解法3：双指针
// 使用双指针优化空间复杂度，在移动过程中维护最大高度。
// 时间复杂度：O(n)，只需要遍历一次数组。
// 空间复杂度：O(1)，只需要常数空间。
export function trapTwoPointers(height: number[]): number {
  const n = height.length;
  if (n <= 2) return 0;

  let left = 0;
  let right = n - 1;
  let leftMax = 0;
  let rightMax = 0;
  let result = 0;

  while (left < right) {
    leftMax = Math.max(leftMax, height[left]);
    rightMax = Math.max(rightMax, height[right]);

    if (height[left] < height[right]) {
      result += Math.max(0, leftMax - height[left]);
      left++;
    } else {
      result += Math.max(0, rightMax - height[right]);
      right--;
    }
  }

  return result;
}

// 解法4：单调栈
// 使用单调栈维护一个单调递减的高度序列，遇到更高的柱子时计算能接的雨水量。
// 时间复杂度：O(n)，每个元素最多入栈出栈一次。
// 空间复杂度：O(n)，栈的空间。
export function trapStack(height: number[]): number {
  const n = height.length;
  if (n <= 2) return 0;

  const stack: number[] = [];
  let result = 0;

  for (let i = 0; i < n; i++) {
    while (stack.length > 0 && height[i] > height[stack[stack.length - 1]]) {
      const top = stack.pop()!;
      if (stack.length === 0) break;

      const width = i - stack[stack.length - 1] - 1;
      const boundedHeight =
        Math.min(height[i], height[stack[stack.length - 1]]) - height[top];
      result += width * boundedHeight;
    }
    stack.push(i);
  }

  return result;
}
