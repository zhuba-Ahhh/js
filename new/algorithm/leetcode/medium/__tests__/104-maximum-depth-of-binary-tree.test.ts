import { buildTree } from '../../../test-utils';
import {
  maxDepth,
  maxDepthBFS,
} from '../../easy/104-maximum-depth-of-binary-tree';

describe('104. Maximum Depth of Binary Tree', () => {
  const testCases = [
    {
      input: [3, 9, 20, null, null, 15, 7],
      expected: 3,
    },
    {
      input: [1, null, 2],
      expected: 2,
    },
    {
      input: [],
      expected: 0,
    },
    {
      input: [1],
      expected: 1,
    },
    {
      input: [1, 2, 3, 4, 5, 6, 7, 8, 9],
      expected: 4,
    },
  ];

  describe('解法1：递归（DFS）', () => {
    test.each(testCases)(
      '输入: $input, 期望输出: $expected',
      ({ input, expected }) => {
        const tree = buildTree(input);
        expect(maxDepth(tree)).toBe(expected);
      }
    );
  });

  describe('解法2：迭代（BFS）', () => {
    test.each(testCases)(
      '输入: $input, 期望输出: $expected',
      ({ input, expected }) => {
        const tree = buildTree(input);
        expect(maxDepthBFS(tree)).toBe(expected);
      }
    );
  });
});
