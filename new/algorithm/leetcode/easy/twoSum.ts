/**
 * @tag 数组
 * @tag 哈希表
 */

/**
 * 两数之和
 * @param nums 输入数组
 * @param target 目标和
 * @returns 返回两个数的下标
 */

// 方法一：哈希表法
// 时间复杂度：O(n)，只需遍历一次数组
// 空间复杂度：O(n)，需要一个哈希表存储已遍历的数字
export function twoSum(nums: number[], target: number): number[] {
  const map = new Map<number, number>();

  for (let i = 0; i < nums.length; i++) {
    const complement = target - nums[i];
    if (map.has(complement)) {
      return [map.get(complement)!, i];
    }
    map.set(nums[i], i);
  }

  return [];
}

// 方法二：暴力解法
// 时间复杂度：O(n²)，需要两层循环遍历数组
// 空间复杂度：O(1)，只需要常数级额外空间
export function twoSumBruteForce(nums: number[], target: number): number[] {
  for (let i = 0; i < nums.length; i++) {
    for (let j = i + 1; j < nums.length; j++) {
      if (nums[i] + nums[j] === target) {
        return [i, j];
      }
    }
  }
  return [];
}

// 方法三：双指针法（需要先排序）
// 时间复杂度：O(nlogn)，主要是排序的时间复杂度
// 空间复杂度：O(n)，需要额外数组存储排序前的索引
export function twoSumTwoPointers(nums: number[], target: number): number[] {
  // 创建一个数组存储原始索引
  const indexedNums = nums.map((num, index) => ({ num, index }));
  // 按数字大小排序
  indexedNums.sort((a, b) => a.num - b.num);

  let left = 0;
  let right = nums.length - 1;

  while (left < right) {
    const sum = indexedNums[left].num + indexedNums[right].num;
    if (sum === target) {
      return [indexedNums[left].index, indexedNums[right].index];
    } else if (sum < target) {
      left++;
    } else {
      right--;
    }
  }

  return [];
}
