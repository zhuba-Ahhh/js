/**
 * 爬楼梯
 * @param n 楼梯的阶数
 * @returns 爬到楼顶的方法数
 */

// 方法一：动态规划
// 时间复杂度：O(n)，需要计算到第n个数
// 空间复杂度：O(1)，只需要常数级额外空间
export function climbStairs(n: number): number {
  if (n <= 1) return 1;

  let prev = 1; // 代表 dp[i-2]
  let curr = 1; // 代表 dp[i-1]
  let result = 0;

  for (let i = 2; i <= n; i++) {
    result = prev + curr;
    prev = curr;
    curr = result;
  }

  return result;
}

// 方法二：递归 + 记忆化
// 时间复杂度：O(n)，每个数字只需要计算一次
// 空间复杂度：O(n)，需要递归栈空间
export function climbStairsMemo(n: number): number {
  const memo = new Map<number, number>();

  function climb(i: number): number {
    if (i <= 1) return 1;
    if (memo.has(i)) return memo.get(i)!;

    const result = climb(i - 1) + climb(i - 2);
    memo.set(i, result);
    return result;
  }

  return climb(n);
}

// 方法三：矩阵快速幂
// 时间复杂度：O(logn)，使用快速幂
// 空间复杂度：O(1)，只需要常数级额外空间
export function climbStairsMatrix(n: number): number {
  const q = [
    [1, 1],
    [1, 0],
  ];
  const res = pow(q, n);
  return res[0][0];
}

function pow(a: number[][], n: number): number[][] {
  let ret = [
    [1, 0],
    [0, 1],
  ];
  while (n > 0) {
    if ((n & 1) === 1) {
      ret = multiply(ret, a);
    }
    n >>= 1;
    a = multiply(a, a);
  }
  return ret;
}

function multiply(a: number[][], b: number[][]): number[][] {
  const c = [
    [0, 0],
    [0, 0],
  ];
  for (let i = 0; i < 2; i++) {
    for (let j = 0; j < 2; j++) {
      c[i][j] = a[i][0] * b[0][j] + a[i][1] * b[1][j];
    }
  }
  return c;
}
