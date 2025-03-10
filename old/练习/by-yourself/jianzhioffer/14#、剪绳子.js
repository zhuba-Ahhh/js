/**
剑指 Offer 14- I. 剪绳子
给你一根长度为 n 的绳子，请把绳子剪成整数长度的 m 段（m、n都是整数，n>1并且m>1），每段绳子的长度记为 k[0],k[1]...k[m-1] 。请问 k[0]*k[1]*...*k[m-1] 可能的最大乘积是多少？例如，当绳子的长度是8时，我们把它剪成长度分别为2、3、3的三段，此时得到的最大乘积是18。

示例 1：

输入: 2
输出: 1
解释: 2 = 1 + 1, 1 × 1 = 1
示例 2:

输入: 10
输出: 36
解释: 10 = 3 + 3 + 4, 3 × 3 × 4 = 36
 */
var cuttingRope = function (n) {
  // dp[i]表示数为i并且“拆分了”的乘积最大值
  // 0和1不可拆分，为0
  const dp = new Array(n + 1).fill(0);
  let res = 0;
  for (let i = 2; i <= n; i++) {
    for (let j = 1; j < i; j++) {
      // 那么dp[i]的最大值就是所有  j*(i-j)，j*(dp[i-j])的最大值
      dp[i] = Math.max(dp[i], j * (i - j), j * dp[i - j]);
    }
    res = Math.max(res, dp[i]);
  }
  return res;
};

// 数学方法
var cuttingRope = function (n) {
  // 先特殊情况判断
  if (n <= 3) return n - 1;
  let count = ~~(n / 3);
  let rest = n % 3;
  if (rest === 0) return 3 ** count;
  // 3 3 1 -> 3 * 4
  else if (rest === 1) return 3 ** (count - 1) * 4;
  // 3 3 2 -> 3 * 3 * 2
  else return 3 ** count * 2;
};

// 循环求余，while是大于4的情况，如果等于4，说明要分的话可以分出3+1，但是其实3*1不比4大
var cuttingRope = function (n) {
  //循环求余
  if (n <= 3) return n - 1;
  let res = 1;
  while (n > 4) {
    n -= 3;
    res = res * 3;
  }
  res = res * n;
  return res;
};

console.log(cuttingRope(10));
