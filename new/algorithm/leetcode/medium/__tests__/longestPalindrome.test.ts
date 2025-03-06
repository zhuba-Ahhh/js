import {
  longestPalindrome,
  longestPalindromeDp,
  longestPalindromeManacher,
} from '../longestPalindrome';

describe('最长回文子串', () => {
  // 测试所有实现方法
  const implementations = [
    { name: '中心扩展法', func: longestPalindrome },
    { name: '动态规划', func: longestPalindromeDp },
    { name: 'Manacher算法', func: longestPalindromeManacher },
  ];

  implementations.forEach(({ name, func }) => {
    describe(name, () => {
      // 测试空字符串
      test('空字符串应返回空字符串', () => {
        expect(func('')).toBe('');
      });

      // 测试单字符
      test('单字符应返回其本身', () => {
        expect(func('a')).toBe('a');
      });

      // 测试全相同字符
      test('全相同字符应返回整个字符串', () => {
        expect(func('aaa')).toBe('aaa');
      });

      // 测试奇数长度回文串
      test('奇数长度回文串', () => {
        expect(func('aba')).toBe('aba');
        expect(func('abcba')).toBe('abcba');
      });

      // 测试偶数长度回文串
      test('偶数长度回文串', () => {
        expect(func('abba')).toBe('abba');
        expect(func('abccba')).toBe('abccba');
      });

      // 测试多个回文串，返回最长的
      test('多个回文串时返回最长的', () => {
        expect(func('ababababa')).toBe('ababababa');
        expect(func('abcddcba')).toBe('abcddcba');
      });

      // 测试无回文串
      test('无回文串时返回第一个字符', () => {
        expect(func('abc')).toBe('a');
      });

      // 测试包含特殊字符
      test('包含特殊字符', () => {
        expect(func('a#a')).toBe('a#a');
        expect(func('a!!a')).toBe('a!!a');
      });

      // 测试较长字符串
      test('较长字符串', () => {
        expect(
          func(
            'civilwartestingwhetherthatnaptionoranynartionsoconceivedandsodedicatedcanlongendureWeareqmetonagreatbattlefiemldoftzhatwarWehavecometodedicpateaportionofthatfieldasafinalrestingplaceforthosewhoheregavetheirlivesthatthatnationmightliveItisaltogetherfangandproperthatweshoulddothisButinalargersensewecannotdedicatewecannotconsecratewecannothallowthisgroundThebravelmenlivinganddeadwhostruggledherehaveconsecrateditfaraboveourpoorponwertoaddordetractTgheworldadswfilllittlenotlenorlongrememberwhatwesayherebutitcanneverforgetwhattheydidhereItisforusthelivingrathertobededicatedheretotheulnfinishedworkwhichtheywhofoughtherehavethusfarsonoblyadvancedItisratherforustobeherededicatedtothegreattdafskremainingbeforeusthatfromthesehonoreddeadwetakeincreaseddevotiontothatcauseforwhichtheygavethelastpfullmeasureofdevotionthatweherehighlyresolvethatthesedeadshallnothavediedinvainthatthisnationunsderGodshallhaveanewbirthoffreedomandthatgovernmentofthepeoplebythepeopleforthepeopleshallnotperishfromtheearth'
          )
        ).toBe('ranynar');
      });
    });
  });
});
