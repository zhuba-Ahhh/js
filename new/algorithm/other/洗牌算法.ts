/**
 * 基础的Fisher-Yates洗牌算法
 * 时间复杂度：O(n)
 * 空间复杂度：O(1)
 */
export function shuffle<T>(arr: T[]): T[] {
  const result = [...arr]; // 创建副本，不修改原数组
  const len = result.length;

  // 从最后一个元素开始，逐步向前
  for (let i = len - 1; i > 0; i--) {
    // 生成一个随机索引 j，范围是 [0, i]
    const j = Math.floor(Math.random() * (i + 1));
    // 交换元素
    [result[i], result[j]] = [result[j], result[i]];
  }

  return result;
}

/**
 * 优化版Fisher-Yates洗牌算法
 * - 使用更好的随机数生成器
 * - 支持自定义随机数生成函数
 * 时间复杂度：O(n)
 * 空间复杂度：O(1)
 */
export function shuffleAdvanced<T>(arr: T[], random = Math.random): T[] {
  const result = [...arr];
  const len = result.length;

  for (let i = len - 1; i > 0; i--) {
    const j = Math.floor(random() * (i + 1));
    [result[i], result[j]] = [result[j], result[i]];
  }

  return result;
}

/**
 * 原地洗牌算法（直接修改原数组）
 * 时间复杂度：O(n)
 * 空间复杂度：O(1)
 */
export function shuffleInPlace<T>(arr: T[]): T[] {
  const len = arr.length;

  for (let i = len - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [arr[i], arr[j]] = [arr[j], arr[i]];
  }

  return arr;
}
