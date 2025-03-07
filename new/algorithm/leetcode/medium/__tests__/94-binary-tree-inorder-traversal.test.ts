import { buildTree } from '../../../test-utils';
import {
  inorderTraversal,
  inorderTraversalIterative,
} from '../../easy/94-binary-tree-inorder-traversal';

describe('94. Binary Tree Inorder Traversal', () => {
  const testCases = [
    {
      input: [1, null, 2, 3],
      expected: [1, 3, 2],
    },
    {
      input: [],
      expected: [],
    },
    {
      input: [1],
      expected: [1],
    },
    {
      input: [1, 2, 3, 4, 5, 6, 7],
      expected: [4, 2, 5, 1, 6, 3, 7],
    },
    {
      input: [1, 2, null, 3],
      expected: [3, 2, 1],
    },
  ];

  describe('解法1：递归', () => {
    test.each(testCases)(
      '输入: $input, 期望输出: $expected',
      ({ input, expected }) => {
        const tree = buildTree(input);
        expect(inorderTraversal(tree)).toEqual(expected);
      }
    );
  });

  describe('解法2：迭代（使用栈）', () => {
    test.each(testCases)(
      '输入: $input, 期望输出: $expected',
      ({ input, expected }) => {
        const tree = buildTree(input);
        expect(inorderTraversalIterative(tree)).toEqual(expected);
      }
    );
  });
});
