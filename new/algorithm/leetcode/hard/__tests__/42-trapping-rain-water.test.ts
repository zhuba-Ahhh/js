import {
  trap,
  trapDP,
  trapTwoPointers,
  trapStack,
} from '../42-trapping-rain-water';

describe('42-trapping-rain-water', () => {
  // 测试所有解法
  const solutions = [
    { name: '暴力解法', fn: trap },
    { name: '动态规划', fn: trapDP },
    { name: '双指针', fn: trapTwoPointers },
    { name: '单调栈', fn: trapStack },
  ];

  solutions.forEach(({ name, fn }) => {
    describe(name, () => {
      // 测试用例1：示例数据
      test('示例1：常规情况', () => {
        expect(fn([0, 1, 0, 2, 1, 0, 1, 3, 2, 1, 2, 1])).toBe(6);
      });

      test('示例2：常规情况', () => {
        expect(fn([4, 2, 0, 3, 2, 5])).toBe(9);
      });

      // 测试用例2：边界情况
      test('空数组', () => {
        expect(fn([])).toBe(0);
      });

      test('只有一个元素', () => {
        expect(fn([1])).toBe(0);
      });

      test('只有两个元素', () => {
        expect(fn([1, 2])).toBe(0);
      });

      // 测试用例3：特殊情况
      test('全部相同高度', () => {
        expect(fn([2, 2, 2, 2])).toBe(0);
      });

      test('递增序列', () => {
        expect(fn([1, 2, 3, 4])).toBe(0);
      });

      test('递减序列', () => {
        expect(fn([4, 3, 2, 1])).toBe(0);
      });

      test('凹形序列', () => {
        expect(fn([5, 4, 1, 2])).toBe(1);
      });

      test('凸形序列', () => {
        expect(fn([1, 4, 1])).toBe(0);
      });

      // 测试用例4：复杂情况
      test('多个凹槽', () => {
        expect(fn([5, 2, 1, 2, 1, 5])).toBe(14);
      });

      test('不对称凹槽', () => {
        expect(fn([5, 3, 1, 2, 4])).toBe(6);
      });

      test('阶梯形状', () => {
        expect(fn([4, 1, 2, 3, 2, 1, 4])).toBe(12);
      });
    });
  });
});
