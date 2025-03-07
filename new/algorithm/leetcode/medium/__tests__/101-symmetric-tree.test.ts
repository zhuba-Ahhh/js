import { buildTree } from '../../../test-utils';
import { isSymmetric, isSymmetricIterative } from '../../101-symmetric-tree';

describe('101. Symmetric Tree', () => {
  const testCases = [
    {
      input: [1, 2, 2, 3, 4, 4, 3],
      expected: true,
    },
    {
      input: [1, 2, 2, null, 3, null, 3],
      expected: false,
    },
    {
      input: [],
      expected: true,
    },
    {
      input: [1],
      expected: true,
    },
    {
      input: [1, 2, 2, 2, null, 2],
      expected: false,
    },
    {
      input: [5, 4, 4, null, null, null, null],
      expected: true,
    },
  ];

  describe('解法1：递归', () => {
    test.each(testCases)(
      '输入: $input, 期望输出: $expected',
      ({ input, expected }) => {
        const tree = buildTree(input);
        expect(isSymmetric(tree)).toBe(expected);
      }
    );
  });

  describe('解法2：迭代（使用队列）', () => {
    test.each(testCases)(
      '输入: $input, 期望输出: $expected',
      ({ input, expected }) => {
        const tree = buildTree(input);
        expect(isSymmetricIterative(tree)).toBe(expected);
      }
    );
  });
});
