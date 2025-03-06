import { merge, mergeForward, mergeSort } from '../merge';

describe('合并两个有序数组算法测试', () => {
  // 测试所有实现方法
  const implementations = [
    { name: '双指针法（从后往前）', fn: merge },
    { name: '双指针法（从前往后）', fn: mergeForward },
    { name: '排序法', fn: mergeSort },
  ];

  implementations.forEach(({ name, fn }) => {
    describe(name, () => {
      test('常规情况：两个非空数组', () => {
        const nums1 = [1, 2, 3, 0, 0, 0];
        fn(nums1, 3, [2, 5, 6], 3);
        expect(nums1).toEqual([1, 2, 2, 3, 5, 6]);

        const nums2 = [1, 3, 5, 0, 0, 0];
        fn(nums2, 3, [2, 4, 6], 3);
        expect(nums2).toEqual([1, 2, 3, 4, 5, 6]);
      });

      test('边界情况：nums1为空', () => {
        const nums1 = [0, 0, 0];
        fn(nums1, 0, [1, 2, 3], 3);
        expect(nums1).toEqual([1, 2, 3]);
      });

      test('边界情况：nums2为空', () => {
        const nums1 = [1, 2, 3];
        fn(nums1, 3, [], 0);
        expect(nums1).toEqual([1, 2, 3]);
      });

      test('特殊情况：包含重复元素', () => {
        const nums1 = [1, 1, 2, 0, 0, 0];
        fn(nums1, 3, [1, 2, 3], 3);
        expect(nums1).toEqual([1, 1, 1, 2, 2, 3]);
      });

      test('特殊情况：一个数组的元素都大于另一个数组', () => {
        const nums1 = [4, 5, 6, 0, 0, 0];
        fn(nums1, 3, [1, 2, 3], 3);
        expect(nums1).toEqual([1, 2, 3, 4, 5, 6]);

        const nums2 = [1, 2, 3, 0, 0, 0];
        fn(nums2, 3, [4, 5, 6], 3);
        expect(nums2).toEqual([1, 2, 3, 4, 5, 6]);
      });
    });
  });
});
