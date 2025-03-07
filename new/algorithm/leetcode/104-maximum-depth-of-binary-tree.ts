import { TreeNode } from '../test-utils';

// 解法1：递归（DFS）
export function maxDepth(root: TreeNode | null): number {
  if (!root) return 0;
  return Math.max(maxDepth(root.left), maxDepth(root.right)) + 1;
}

// 解法2：迭代（BFS）
export function maxDepthBFS(root: TreeNode | null): number {
  if (!root) return 0;
  const queue = [root];
  let depth = 0;

  while (queue.length) {
    depth++;
    const size = queue.length;

    for (let i = 0; i < size; i++) {
      const node = queue.shift()!;
      if (node.left) queue.push(node.left);
      if (node.right) queue.push(node.right);
    }
  }

  return depth;
}
