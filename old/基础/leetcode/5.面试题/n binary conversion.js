/**
 * 进制转换
 * @param n 需要被转化的 10 进制数
 * @param base 需要转化成 base 进制数
 * @returns string
 */
function cov(n, base = 7) {
  let ans = [];
  while (n) {
    ans.push(n % base);
    n = parseInt(n / base);
  }
  return ans.reverse().join('');
}

console.log(cov(7));
console.log(cov(7, 2));
console.log(cov(111));
