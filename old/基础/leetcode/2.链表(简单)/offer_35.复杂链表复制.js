/**
 * // Definition for a Node.
 * function Node(val, next, random) {
 *    this.val = val;
 *    this.next = next;
 *    this.random = random;
 * };
 */

/**
 * @param {Node} head
 * @return {Node}
 */
var copyRandomList = function (head) {
  //使用map作为哈希表 空间复杂度O(n)
  if (!head) return head;
  let node = head; //保存头节点
  let map = new Map(); //定义Map

  //复制节点加入map
  while (node) {
    map.set(node, new Node(node.val));
    node = node.next;
  }

  //重新赋值头节点
  node = head;

  //对map里面的新节点进行遍历
  while (node) {
    if (node.next) {
      map.get(node).next = map.get(node.next);
    } else {
      map.get(node).next = null;
    }
    map.get(node).random = map.get(node.random);
    node = node.next;
  }
  return map.get(head);
};
