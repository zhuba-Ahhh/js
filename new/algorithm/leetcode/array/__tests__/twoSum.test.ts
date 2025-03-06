import { twoSum, twoSumBruteForce, twoSumTwoPointers } from '../twoSum';

describe('两数之和算法测试', () => {
  // 测试所有实现方法
  const implementations = [
    { name: '哈希表法', fn: twoSum },
    { name: '暴力解法', fn: twoSumBruteForce },
    { name: '双指针法', fn: twoSumTwoPointers },
  ];

  implementations.forEach(({ name, fn }) => {
    describe(name, () => {
      test('常规情况：数组中有两个数之和等于目标值', () => {
        expect(fn([2, 7, 11, 15], 9).sort()).toEqual([0, 1]);
        expect(fn([3, 2, 4], 6).sort()).toEqual([1, 2]);
      });

      test('数组中有重复元素', () => {
        expect(fn([3, 3], 6).sort()).toEqual([0, 1]);
        expect(fn([1, 3, 3, 4], 6).sort()).toEqual([1, 2]);
      });

      test('边界情况：数组为空或只有一个元素', () => {
        expect(fn([], 1)).toEqual([]);
        expect(fn([1], 1)).toEqual([]);
      });

      test('特殊情况：没有符合条件的两个数', () => {
        expect(fn([1, 2, 3], 7)).toEqual([]);
        expect(fn([5, 8, 12], 4)).toEqual([]);
      });
    });
  });
});
