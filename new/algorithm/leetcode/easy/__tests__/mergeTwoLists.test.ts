import {
  ListNode,
  mergeTwoLists,
  mergeTwoListsIterative,
} from '../mergeTwoLists';

describe('合并两个有序链表算法测试', () => {
  // 辅助函数：将数组转换为链表
  function arrayToList(arr: number[]): ListNode | null {
    if (arr.length === 0) return null;
    const dummy = new ListNode(0);
    let current = dummy;
    arr.forEach(val => {
      current.next = new ListNode(val);
      current = current.next;
    });
    return dummy.next;
  }

  // 辅助函数：将链表转换为数组
  function listToArray(head: ListNode | null): number[] {
    const result: number[] = [];
    let current = head;
    while (current !== null) {
      result.push(current.val);
      current = current.next;
    }
    return result;
  }

  // 测试所有实现方法
  const implementations = [
    { name: '递归解法', fn: mergeTwoLists },
    { name: '迭代解法', fn: mergeTwoListsIterative },
  ];

  implementations.forEach(({ name, fn }) => {
    describe(name, () => {
      test('常规情况：两个有序链表合并', () => {
        const l1 = arrayToList([1, 2, 4]);
        const l2 = arrayToList([1, 3, 4]);
        const result = fn(l1, l2);
        expect(listToArray(result)).toEqual([1, 1, 2, 3, 4, 4]);
      });

      test('一个链表为空的情况', () => {
        const l1 = arrayToList([1, 2, 3]);
        const l2 = arrayToList([]);
        expect(listToArray(fn(l1, l2))).toEqual([1, 2, 3]);
        expect(listToArray(fn(l2, l1))).toEqual([1, 2, 3]);
      });

      test('两个链表都为空的情况', () => {
        expect(fn(null, null)).toBeNull();
      });

      test('链表长度不同的情况', () => {
        const l1 = arrayToList([1, 2, 3, 4, 5]);
        const l2 = arrayToList([2, 4]);
        expect(listToArray(fn(l1, l2))).toEqual([1, 2, 2, 3, 4, 4, 5]);
      });

      test('有重复元素的情况', () => {
        const l1 = arrayToList([1, 1, 2]);
        const l2 = arrayToList([1, 2, 2]);
        expect(listToArray(fn(l1, l2))).toEqual([1, 1, 1, 2, 2, 2]);
      });
    });
  });
});
