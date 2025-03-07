/**
 * @tag 数组
 * @tag 双指针
 * @tag 排序
 * @difficulty 中等
 * @summary 给你一个整数数组 nums，判断是否存在三个元素 a，b，c ，使得 a + b + c = 0。请你找出所有和为 0 且不重复的三元组。
 * @description
 * 给定一个包含 n 个整数的数组 nums，判断 nums 中是否存在三个元素 a，b，c ，使得 a + b + c = 0。
 * 找出所有满足条件且不重复的三元组。
 *
 * 注意：答案中不可以包含重复的三元组。
 *
 * @example
 * 输入：nums = [-1,0,1,2,-1,-4]
 * 输出：[[-1,-1,2],[-1,0,1]]
 *
 * @param nums 输入数组
 * @returns 所有和为 0 且不重复的三元组数组
 */

// 方法一：排序 + 双指针
// 时间复杂度：O(n²)，其中排序的时间复杂度是 O(nlogn)，双指针遍历的时间复杂度是 O(n²)
// 空间复杂度：O(logn)，排序所需的空间复杂度
export function threeSum(nums: number[]): number[][] {
  const result: number[][] = [];
  // 数组长度小于3，直接返回空数组
  if (nums.length < 3) return result;

  // 先将数组排序
  nums.sort((a, b) => a - b);

  for (let i = 0; i < nums.length - 2; i++) {
    // 如果当前数字大于0，则三数之和一定大于0
    if (nums[i] > 0) break;

    // 跳过重复的数字
    if (i > 0 && nums[i] === nums[i - 1]) continue;

    let left = i + 1;
    let right = nums.length - 1;

    while (left < right) {
      const sum = nums[i] + nums[left] + nums[right];

      if (sum === 0) {
        result.push([nums[i], nums[left], nums[right]]);
        // 跳过重复的数字
        while (left < right && nums[left] === nums[left + 1]) left++;
        while (left < right && nums[right] === nums[right - 1]) right--;
        left++;
        right--;
      } else if (sum < 0) {
        left++;
      } else {
        right--;
      }
    }
  }

  return result;
}

// 方法二：哈希表法
// 时间复杂度：O(n²)，需要两层循环
// 空间复杂度：O(n)，需要一个哈希表存储数字
export function threeSumHash(nums: number[]): number[][] {
  const result: number[][] = [];
  if (nums.length < 3) return result;

  // 先将数组排序，用于去重
  nums.sort((a, b) => a - b);

  for (let i = 0; i < nums.length - 2; i++) {
    // 如果当前数字大于0，则三数之和一定大于0
    if (nums[i] > 0) break;

    // 跳过重复的数字
    if (i > 0 && nums[i] === nums[i - 1]) continue;

    const seen = new Set<number>();
    for (let j = i + 1; j < nums.length; j++) {
      // 计算需要的第三个数
      const complement = -(nums[i] + nums[j]);

      if (seen.has(complement)) {
        result.push([nums[i], complement, nums[j]]);
        // 跳过重复的数字
        while (j + 1 < nums.length && nums[j] === nums[j + 1]) j++;
      }
      seen.add(nums[j]);
    }
  }

  return result;
}
