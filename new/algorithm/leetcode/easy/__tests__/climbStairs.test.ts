import {
  climbStairs,
  climbStairsMemo,
  climbStairsMatrix,
} from '../climbStairs';

describe('爬楼梯算法测试', () => {
  // 测试所有实现方法
  const implementations = [
    { name: '动态规划', fn: climbStairs },
    { name: '递归 + 记忆化', fn: climbStairsMemo },
    { name: '矩阵快速幂', fn: climbStairsMatrix },
  ];

  implementations.forEach(({ name, fn }) => {
    describe(name, () => {
      test('常规情况：小规模阶梯', () => {
        expect(fn(2)).toBe(2);
        expect(fn(3)).toBe(3);
        expect(fn(4)).toBe(5);
      });

      test('边界情况：0和1阶楼梯', () => {
        expect(fn(0)).toBe(1);
        expect(fn(1)).toBe(1);
      });

      test('特殊情况：较大规模阶梯', () => {
        expect(fn(5)).toBe(8);
        expect(fn(6)).toBe(13);
        expect(fn(7)).toBe(21);
      });

      test('性能测试：大规模阶梯', () => {
        expect(fn(30)).toBe(1346269);
        expect(fn(35)).toBe(14930352);
      });
    });
  });
});
