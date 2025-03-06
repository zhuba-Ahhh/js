import {
  maxSubArray,
  maxSubArrayDivideConquer,
  maxSubArrayKadane,
} from '../maxSubArray';

describe('最大子数组和算法测试', () => {
  // 测试所有实现方法
  const implementations = [
    { name: '动态规划', fn: maxSubArray },
    { name: '分治法', fn: maxSubArrayDivideConquer },
    { name: 'Kadane算法', fn: maxSubArrayKadane },
  ];

  implementations.forEach(({ name, fn }) => {
    describe(name, () => {
      test('常规情况：数组中有正数和负数', () => {
        expect(fn([-2, 1, -3, 4, -1, 2, 1, -5, 4])).toBe(6);
        expect(fn([1, 2, 3, -2, 5])).toBe(9);
      });

      test('数组中全是负数', () => {
        expect(fn([-1])).toBe(-1);
        expect(fn([-2, -1])).toBe(-1);
        expect(fn([-2, -3, -1, -5])).toBe(-1);
      });

      test('数组中全是正数', () => {
        expect(fn([1, 2, 3, 4, 5])).toBe(15);
        expect(fn([1])).toBe(1);
      });

      test('边界情况：空数组', () => {
        expect(fn([])).toBe(0);
      });

      test('特殊情况：包含0的数组', () => {
        expect(fn([-2, 0, -1])).toBe(0);
        expect(fn([0, 0, 0])).toBe(0);
      });
    });
  });
});
