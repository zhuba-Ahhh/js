/**
 * @tag 二叉树
 * @tag 深度优先搜索
 * @tag 栈
 * @difficulty 简单
 * @summary 给定一个二叉树的根节点 root，返回它的中序遍历结果。
 * @description
 * 给定一个二叉树的根节点 root，返回其节点值的中序遍历。
 * 中序遍历的顺序是：左子树 -> 根节点 -> 右子树。
 *
 * @example
 * 输入：root = [1,null,2,3]
 * 输出：[1,3,2]
 *
 * @param root 二叉树的根节点
 * @returns 中序遍历结果数组
 */

import { TreeNode } from '../test-utils';

// 解法1：递归（DFS）
// 时间复杂度：O(n)，其中 n 是二叉树的节点数。每个节点恰好被遍历一次。
// 空间复杂度：O(n)，为递归过程中栈的开销，平均情况下为 O(log n)，最坏情况下树呈现链状，为 O(n)。
export function inorderTraversal(root: TreeNode | null): number[] {
  const result: number[] = [];

  function dfs(node: TreeNode | null) {
    if (!node) return;
    dfs(node.left); // 先遍历左子树
    result.push(node.val); // 再访问根节点
    dfs(node.right); // 最后遍历右子树
  }

  dfs(root);
  return result;
}

// 解法2：迭代（使用栈）
// 时间复杂度：O(n)，其中 n 是二叉树的节点数。每个节点恰好被遍历一次。
// 空间复杂度：O(n)，为迭代过程中显式栈的开销，平均情况下为 O(log n)，最坏情况下树呈现链状，为 O(n)。
export function inorderTraversalIterative(root: TreeNode | null): number[] {
  const result: number[] = [];
  const stack: TreeNode[] = [];
  let current = root;

  while (current || stack.length) {
    // 遍历到最左叶子节点
    while (current) {
      stack.push(current);
      current = current.left;
    }

    // 处理当前节点
    current = stack.pop()!;
    result.push(current.val);

    // 转向右子树
    current = current.right;
  }

  return result;
}
