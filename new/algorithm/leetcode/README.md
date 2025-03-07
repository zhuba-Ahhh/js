# LeetCode Hot 100 题解

按照不同难度和数据结构类型整理的 LeetCode Hot 100 题解，每道题目都提供多种解法、复杂度分析和完整的测试用例。

## 目录结构

```
├── easy/       # 简单难度题目
├── medium/     # 中等难度题目
├── hard/       # 困难难度题目
```

## 代码组织

每道题目都按照以下方式组织：

1. 实现文件：包含多种解法、复杂度分析和详细注释
2. 测试文件：覆盖常规情况、边界情况和特殊情况

## 已完成题目

### 数组
- Two Sum (两数之和) - Easy
  - 解法：哈希表法、暴力解法、双指针法
  - 时间复杂度：O(n)、O(n²)、O(nlogn)
- Three Sum (三数之和) - Medium
  - 解法：排序+双指针、哈希表法
  - 时间复杂度：O(n²)、O(n²)
- Maximum Subarray (最大子数组和) - Easy
  - 解法：动态规划、分治法、Kadane算法
  - 时间复杂度：O(n)、O(nlogn)、O(n)

### 哈希表
- Two Sum (两数之和) - Easy
  - 使用哈希表优化查找效率
  - 时间复杂度：O(n)
- Valid Parentheses (有效括号) - Easy
  - 使用栈和哈希表匹配括号
  - 时间复杂度：O(n)

### 双指针
- Two Sum (两数之和) - Easy
  - 排序后使用双指针查找
  - 时间复杂度：O(nlogn)
- Three Sum (三数之和) - Medium
  - 排序后使用双指针优化搜索
  - 时间复杂度：O(n²)

### 字符串
- Longest Palindromic Substring (最长回文子串) - Medium
  - 解法：中心扩展法、动态规划、Manacher算法
  - 时间复杂度：O(n²)、O(n²)、O(n)

### 链表
- Merge Two Sorted Lists (合并两个有序链表) - Easy
  - 解法：递归法、迭代法
  - 时间复杂度：O(n+m)

### 数组操作
- Merge Sorted Array (合并两个有序数组) - Easy
  - 解法：双指针法（从后往前）、双指针法（从前往后）、排序法
  - 时间复杂度：O(m+n)、O(m+n)、O((m+n)log(m+n))

### 动态规划
- Climbing Stairs (爬楼梯) - Easy
  - 解法：动态规划、递归+记忆化、矩阵快速幂
  - 时间复杂度：O(n)、O(n)、O(logn)
- House Robber (打家劫舍) - Medium
  - 解法：动态规划、记忆化搜索
  - 时间复杂度：O(n)、O(n)
- Longest Increasing Subsequence (最长递增子序列) - Medium
  - 解法：动态规划、二分查找优化
  - 时间复杂度：O(n²)、O(nlogn)

### 二叉树
- Maximum Depth of Binary Tree (二叉树的最大深度) - Easy
  - 解法：递归法、迭代法(层序遍历)
  - 时间复杂度：O(n)、O(n)
- Binary Tree Inorder Traversal (二叉树的中序遍历) - Easy
  - 解法：递归法、迭代法、Morris遍历
  - 时间复杂度：O(n)、O(n)、O(n)
- Symmetric Tree (对称二叉树) - Easy
  - 解法：递归法、迭代法
  - 时间复杂度：O(n)、O(n)

### 回溯算法
- Permutations (全排列) - Medium
  - 解法：回溯法、递归交换
  - 时间复杂度：O(n!)、O(n!)
- Subsets (子集) - Medium
  - 解法：回溯法、位运算
  - 时间复杂度：O(2^n)、O(2^n)
- Combination Sum (组合总和) - Medium
  - 解法：回溯法
  - 时间复杂度：O(n^target)

### 困难题目
- Trapping Rain Water (接雨水) - Hard
  - 解法：暴力解法、动态规划、双指针、单调栈
  - 时间复杂度：O(n²)、O(n)、O(n)、O(n)