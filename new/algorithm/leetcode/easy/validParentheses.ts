/**
 * @tag 栈
 * @tag 哈希表
 */

/**
 * 有效的括号
 * 给定一个只包括 '('，')'，'{'，'}'，'['，']' 的字符串 s，判断字符串是否有效
 * 有效字符串需满足：
 * 1. 左括号必须用相同类型的右括号闭合
 * 2. 左括号必须以正确的顺序闭合
 * @param s 输入字符串
 * @returns 是否是有效的括号字符串
 */

// 方法一：栈 + 哈希表
// 时间复杂度：O(n)，其中 n 是字符串的长度
// 空间复杂度：O(n)，需要一个栈存储左括号
export function isValid(s: string): boolean {
  // 如果字符串长度为奇数，一定不是有效的括号
  if (s.length % 2 === 1) return false;

  // 使用哈希表存储括号对应关系
  const pairs = new Map([
    [')', '('],
    ['}', '{'],
    [']', '['],
  ]);

  const stack: string[] = [];

  for (const char of s) {
    if (pairs.has(char)) {
      // 当前字符是右括号
      if (!stack.length || stack[stack.length - 1] !== pairs.get(char)) {
        return false;
      }
      stack.pop();
    } else {
      // 当前字符是左括号
      stack.push(char);
    }
  }

  // 栈为空说明所有括号都匹配成功
  return stack.length === 0;
}

// 方法二：计数法（仅适用于只有一种括号的情况）
// 时间复杂度：O(n)
// 空间复杂度：O(1)
export function isValidSimple(s: string): boolean {
  // 这个方法只适用于只有一种括号的情况，如 '(' 和 ')'
  let count = 0;

  for (const char of s) {
    if (char === '(') {
      count++;
    } else if (char === ')') {
      count--;
    }

    // 如果count小于0，说明右括号多于左括号
    if (count < 0) return false;
  }

  // count为0说明左右括号数量相等
  return count === 0;
}
