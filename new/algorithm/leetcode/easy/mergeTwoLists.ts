/**
 * 合并两个有序链表
 * Definition for singly-linked list.
 */
class ListNode {
  val: number;
  next: ListNode | null;
  constructor(val?: number, next?: ListNode | null) {
    this.val = val === undefined ? 0 : val;
    this.next = next === undefined ? null : next;
  }
}

// 方法一：递归
// 时间复杂度：O(n + m)，其中 n 和 m 分别为两个链表的长度
// 空间复杂度：O(n + m)，递归调用栈的深度
export function mergeTwoLists(
  l1: ListNode | null,
  l2: ListNode | null
): ListNode | null {
  if (l1 === null) return l2;
  if (l2 === null) return l1;

  if (l1.val <= l2.val) {
    l1.next = mergeTwoLists(l1.next, l2);
    return l1;
  } else {
    l2.next = mergeTwoLists(l1, l2.next);
    return l2;
  }
}

// 方法二：迭代
// 时间复杂度：O(n + m)，其中 n 和 m 分别为两个链表的长度
// 空间复杂度：O(1)，只需要常数级额外空间
export function mergeTwoListsIterative(
  l1: ListNode | null,
  l2: ListNode | null
): ListNode | null {
  const dummy = new ListNode(0);
  let current = dummy;

  while (l1 !== null && l2 !== null) {
    if (l1.val <= l2.val) {
      current.next = l1;
      l1 = l1.next;
    } else {
      current.next = l2;
      l2 = l2.next;
    }
    current = current.next;
  }

  current.next = l1 === null ? l2 : l1;
  return dummy.next;
}

// 导出 ListNode 类以供测试使用
export { ListNode };
