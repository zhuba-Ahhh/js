import { isValid, isValidSimple } from '../validParentheses';

describe('有效的括号', () => {
  describe('方法一：栈 + 哈希表', () => {
    test('有效的括号组合', () => {
      expect(isValid('()')).toBe(true);
      expect(isValid('()[]{}')).toBe(true);
      expect(isValid('{[]}')).toBe(true);
    });

    test('无效的括号组合', () => {
      expect(isValid('(]')).toBe(false);
      expect(isValid('([)]')).toBe(false);
      expect(isValid(']')).toBe(false);
    });

    test('边界情况', () => {
      expect(isValid('')).toBe(true);
      expect(isValid('(')).toBe(false);
      expect(isValid('((')).toBe(false);
    });
  });

  describe('方法二：计数法（仅适用于单种括号）', () => {
    test('有效的括号组合', () => {
      expect(isValidSimple('()')).toBe(true);
      expect(isValidSimple('(())')).toBe(true);
      expect(isValidSimple('()()')).toBe(true);
    });

    test('无效的括号组合', () => {
      expect(isValidSimple(')')).toBe(false);
      expect(isValidSimple(')(')).toBe(false);
      expect(isValidSimple('(()')).toBe(false);
    });

    test('边界情况', () => {
      expect(isValidSimple('')).toBe(true);
      expect(isValidSimple('(')).toBe(false);
      expect(isValidSimple('((')).toBe(false);
    });
  });
});
