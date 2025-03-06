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
- Maximum Subarray (最大子数组和) - Medium
  - 解法：动态规划、分治法
  - 时间复杂度：O(n)、O(nlogn)

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