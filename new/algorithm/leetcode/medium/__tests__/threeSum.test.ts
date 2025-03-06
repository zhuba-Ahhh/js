import { threeSum, threeSumHash } from '../threeSum';

describe('三数之和', () => {
  // 测试所有实现方法
  const implementations = [
    { name: '排序 + 双指针', func: threeSum },
    { name: '哈希表法', func: threeSumHash },
  ];

  implementations.forEach(({ name, func }) => {
    describe(name, () => {
      // 测试空数组
      test('空数组应返回空数组', () => {
        expect(func([])).toEqual([]);
      });

      // 测试长度小于3的数组
      test('长度小于3的数组应返回空数组', () => {
        expect(func([1])).toEqual([]);
        expect(func([1, 2])).toEqual([]);
      });

      // 测试无解的情况
      test('无解的情况应返回空数组', () => {
        expect(func([1, 2, 3])).toEqual([]);
        expect(func([1, 2, 4, 6])).toEqual([]);
      });

      // 测试只有一组解的情况
      test('只有一组解的情况', () => {
        expect(func([-1, 0, 1])).toEqual([[-1, 0, 1]]);
        expect(func([-2, 1, 1])).toEqual([[-2, 1, 1]]);
      });

      // 测试有多组解的情况
      test('有多组解的情况', () => {
        expect(func([-1, 0, 1, 2, -1, -4])).toEqual([
          [-4, 2, 2],
          [-1, -1, 2],
          [-1, 0, 1],
        ]);
      });

      // 测试包含重复元素的情况
      test('包含重复元素的情况', () => {
        expect(func([-2, 0, 0, 2, 2])).toEqual([[-2, 0, 2]]);
      });

      // 测试全为0的情况
      test('全为0的情况', () => {
        expect(func([0, 0, 0, 0])).toEqual([[0, 0, 0]]);
      });

      // 测试包含较大数值的情况
      test('包含较大数值的情况', () => {
        expect(func([-1000, 1000, 0])).toEqual([[-1000, 0, 1000]]);
      });

      // 测试包含负数的情况
      test('包含负数的情况', () => {
        expect(func([-5, -4, -3, -2, -1, 0, 1, 2, 3, 4, 5])).toEqual([
          [-5, 0, 5],
          [-4, -1, 5],
          [-4, 0, 4],
          [-3, -2, 5],
          [-3, -1, 4],
          [-3, 0, 3],
          [-2, -1, 3],
          [-2, 0, 2],
          [-1, 0, 1],
        ]);
      });
    });
  });
});
