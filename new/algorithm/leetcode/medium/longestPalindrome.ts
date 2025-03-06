/**
 * @tag 字符串
 * @tag 动态规划
 */

/**
 * 最长回文子串
 * 给你一个字符串 s，找到 s 中最长的回文子串
 * @param s 输入字符串
 * @returns 最长回文子串
 */

// 方法一：中心扩展法
// 时间复杂度：O(n²)，其中 n 是字符串的长度
// 空间复杂度：O(1)
export function longestPalindrome(s: string): string {
  if (s.length < 2) return s;

  let start = 0;
  let maxLength = 1;

  // 从中心向两边扩展
  function expandAroundCenter(left: number, right: number): void {
    while (left >= 0 && right < s.length && s[left] === s[right]) {
      const currentLength = right - left + 1;
      if (currentLength > maxLength) {
        start = left;
        maxLength = currentLength;
      }
      left--;
      right++;
    }
  }

  // 遍历每个可能的中心点
  for (let i = 0; i < s.length; i++) {
    expandAroundCenter(i, i); // 奇数长度
    expandAroundCenter(i, i + 1); // 偶数长度
  }

  return s.substring(start, start + maxLength);
}

// 方法二：动态规划
// 时间复杂度：O(n²)
// 空间复杂度：O(n²)
export function longestPalindromeDp(s: string): string {
  const n = s.length;
  if (n < 2) return s;

  // dp[i][j] 表示 s[i..j] 是否是回文串
  const dp: boolean[][] = Array(n)
    .fill(0)
    .map(() => Array(n).fill(false));

  // 所有单字符都是回文串
  for (let i = 0; i < n; i++) {
    dp[i][i] = true;
  }

  let start = 0;
  let maxLength = 1;

  // 枚举子串长度
  for (let len = 2; len <= n; len++) {
    // 枚举左边界
    for (let i = 0; i < n - len + 1; i++) {
      const j = i + len - 1; // 右边界

      if (s[i] === s[j]) {
        if (len === 2) {
          dp[i][j] = true;
        } else {
          dp[i][j] = dp[i + 1][j - 1];
        }
      }

      if (dp[i][j] && len > maxLength) {
        start = i;
        maxLength = len;
      }
    }
  }

  return s.substring(start, start + maxLength);
}

// 方法三：Manacher 算法
// 时间复杂度：O(n)
// 空间复杂度：O(n)
export function longestPalindromeManacher(s: string): string {
  // 预处理字符串
  const t = '#' + s.split('').join('#') + '#';
  const n = t.length;

  // p[i] 表示以 i 为中心的回文半径
  const p: number[] = new Array(n).fill(0);

  let center = 0; // 当前最大回文的中心
  let maxRight = 0; // 当前最大回文的右边界

  let start = 0;
  let maxLength = 1;

  for (let i = 0; i < n; i++) {
    if (i < maxRight) {
      const mirror = 2 * center - i;
      p[i] = Math.min(maxRight - i, p[mirror]);
    }

    // 中心扩展
    let left = i - (p[i] + 1);
    let right = i + (p[i] + 1);
    while (left >= 0 && right < n && t[left] === t[right]) {
      p[i]++;
      left--;
      right++;
    }

    // 更新中心和右边界
    if (i + p[i] > maxRight) {
      center = i;
      maxRight = i + p[i];
    }

    // 更新最长回文子串
    if (p[i] > maxLength) {
      maxLength = p[i];
      start = Math.floor((i - maxLength) / 2);
    }
  }

  return s.substring(start, start + maxLength);
}
