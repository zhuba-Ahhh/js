class TreeNode {
  constructor(val) {
    this.val = val;
    this.left = null;
    this.right = null;
  }
}

function isFullBinaryTree(root) {
  // 递归函数，判断以当前节点为根节点的二叉树是否为满二叉树
  function isFull(node) {
    // 如果当前节点为空，则返回 true
    if (node === null) {
      return true;
    }

    // 如果当前节点的左子节点和右子节点都不为空，则继续递归判断左右子树是否为满二叉树
    if (node.left !== null && node.right !== null) {
      return isFull(node.left) && isFull(node.right);
    }

    // 如果当前节点的左子节点和右子节点都为空，则返回 false
    if (node.left === null && node.right === null) {
      return false;
    }

    // 如果当前节点的左子节点为空，但右子节点不为空，或者左子节点不为空，但右子节点为空，则返回 false
    return false;
  }

  // 调用递归函数判断根节点是否为满二叉树
  return isFull(root);
}

// 测试示例
const root = new TreeNode(1);
root.left = new TreeNode(2);
root.right = new TreeNode(3);
root.left.left = new TreeNode(4);
root.left.right = new TreeNode(5);

console.log(isFullBinaryTree(root)); // 输出 true
