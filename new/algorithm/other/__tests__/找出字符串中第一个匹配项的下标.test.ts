import {
  findFirstIndex,
  findFirstIndex1,
  kmpSearch,
  rabinKarpSearch,
} from '../找出字符串中第一个匹配项的下标';

const testCases: { input: [string, string]; expected: number }[] = [
  {
    input: ['sadbutsad', 'sad'],
    expected: 0,
  },
  {
    input: ['leetcode', 'leeto'],
    expected: -1,
  },
  {
    input: ['hello', 'll'],
    expected: 2,
  },
  {
    input: ['', ''],
    expected: 0,
  },
  {
    input: ['aaaaa', 'bba'],
    expected: -1,
  },
];

describe('字符串匹配算法测试', () => {
  describe('使用 indexOf 方法', () => {
    testCases.forEach(({ input, expected }, index) => {
      test(`测试用例 ${index + 1}: haystack = "${input[0]}", needle = "${input[1]}"`, () => {
        const result = findFirstIndex(...input);
        expect(result).toBe(expected);
      });
    });
  });

  describe('使用双循环方法', () => {
    testCases.forEach(({ input, expected }, index) => {
      test(`测试用例 ${index + 1}: haystack = "${input[0]}", needle = "${input[1]}"`, () => {
        const result = findFirstIndex1(...input);
        expect(result).toBe(expected);
      });
    });
  });

  describe('使用 KMP 算法', () => {
    testCases.forEach(({ input, expected }, index) => {
      test(`测试用例 ${index + 1}: haystack = "${input[0]}", needle = "${input[1]}"`, () => {
        const result = kmpSearch(...input);
        expect(result).toBe(expected);
      });
    });
  });

  describe('使用 Rabin-Karp 算法', () => {
    testCases.forEach(({ input, expected }, index) => {
      test(`测试用例 ${index + 1}: haystack = "${input[0]}", needle = "${input[1]}"`, () => {
        const result = rabinKarpSearch(...input);
        expect(result).toBe(expected);
      });
    });
  });
});
