/**
 * 合并两个有序数组
 * @param nums1 第一个数组，假设其有足够的空间容纳nums2的元素
 * @param m nums1中的有效元素个数
 * @param nums2 第二个数组
 * @param n nums2的长度
 */

// 方法一：双指针法（从后往前）
// 时间复杂度：O(m+n)，需要遍历两个数组
// 空间复杂度：O(1)，只需要常数级额外空间
export function merge(
  nums1: number[],
  m: number,
  nums2: number[],
  n: number
): void {
  let p1 = m - 1; // nums1的指针
  let p2 = n - 1; // nums2的指针
  let p = m + n - 1; // 合并后的指针

  while (p2 >= 0) {
    if (p1 >= 0 && nums1[p1] > nums2[p2]) {
      nums1[p] = nums1[p1];
      p1--;
    } else {
      nums1[p] = nums2[p2];
      p2--;
    }
    p--;
  }
}

// 方法二：双指针法（从前往后）
// 时间复杂度：O(m+n)，需要遍历两个数组
// 空间复杂度：O(m)，需要额外空间存储nums1的元素
export function mergeForward(
  nums1: number[],
  m: number,
  nums2: number[],
  n: number
): void {
  const nums1Copy = nums1.slice(0, m);
  let p1 = 0; // nums1Copy的指针
  let p2 = 0; // nums2的指针
  let p = 0; // nums1的指针

  while (p < m + n) {
    if (p2 >= n || (p1 < m && nums1Copy[p1] <= nums2[p2])) {
      nums1[p] = nums1Copy[p1];
      p1++;
    } else {
      nums1[p] = nums2[p2];
      p2++;
    }
    p++;
  }
}

// 方法三：排序法
// 时间复杂度：O((m+n)log(m+n))，排序的时间复杂度
// 空间复杂度：O(1)，只需要常数级额外空间
export function mergeSort(
  nums1: number[],
  m: number,
  nums2: number[],
  n: number
): void {
  for (let i = 0; i < n; i++) {
    nums1[m + i] = nums2[i];
  }
  nums1.sort((a, b) => a - b);
}
