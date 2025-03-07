/**
 * @tag 二叉树
 * @tag 深度优先搜索
 * @tag 广度优先搜索
 * @difficulty 简单
 * @summary 给你一个二叉树的根节点 root，检查它是否轴对称。
 * @description
 * 给定一个二叉树，检查它是否是镜像对称的。
 * 例如，二叉树 [1,2,2,3,4,4,3] 是对称的。
 *
 * @example
 * 输入：root = [1,2,2,3,4,4,3]
 * 输出：true
 *
 * @example
 * 输入：root = [1,2,2,null,3,null,3]
 * 输出：false
 *
 * @param root 二叉树的根节点
 * @returns 是否是对称二叉树
 */

import { TreeNode } from '../test-utils';

// 解法1：递归（DFS）
// 时间复杂度：O(n)，其中 n 是二叉树的节点数。每个节点恰好被遍历一次。
// 空间复杂度：O(n)，为递归过程中栈的开销，平均情况下为 O(log n)，最坏情况下树呈现链状，为 O(n)。
export function isSymmetric(root: TreeNode | null): boolean {
  if (!root) return true;

  function isMirror(left: TreeNode | null, right: TreeNode | null): boolean {
    if (!left && !right) return true;
    if (!left || !right) return false;

    return (
      left.val === right.val &&
      isMirror(left.left, right.right) &&
      isMirror(left.right, right.left)
    );
  }

  return isMirror(root.left, root.right);
}

// 解法2：迭代（BFS，使用队列）
// 时间复杂度：O(n)，其中 n 是二叉树的节点数。每个节点恰好被遍历一次。
// 空间复杂度：O(n)，为队列的开销，最坏情况下树的一层最多有 n/2 个节点。
export function isSymmetricIterative(root: TreeNode | null): boolean {
  if (!root) return true;

  const queue: (TreeNode | null)[] = [root.left, root.right];

  while (queue.length) {
    const left = queue.shift();
    const right = queue.shift();

    if (!left && !right) continue;
    if (!left || !right) return false;
    if (left.val !== right.val) return false;

    queue.push(left.left, right.right);
    queue.push(left.right, right.left);
  }

  return true;
}
