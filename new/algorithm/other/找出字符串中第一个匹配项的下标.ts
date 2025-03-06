// haystack = "sadbutsad", needle = "sad" => 0
export function findFirstIndex(haystack: string, needle: string) {
  return haystack.indexOf(needle);
}

// 双循环 O(n * m)
export function findFirstIndex1(haystack: string, needle: string) {
  // 如果 needle 是空字符串，直接返回 0（根据题意）
  if (needle.length === 0) {
    return 0;
  }

  // 遍历 haystack 的每个字符
  for (let i = 0; i <= haystack.length - needle.length; i++) {
    let match = true; // 假设当前起始位置可以匹配

    // 检查从当前起始位置开始的子串是否与 needle 匹配
    for (let j = 0; j < needle.length; j++) {
      if (haystack[i + j] !== needle[j]) {
        match = false; // 如果有一个字符不匹配，标记为不匹配
        break;
      }
    }

    // 如果匹配成功，返回当前起始位置的下标
    if (match) {
      return i;
    }
  }

  // 如果遍历结束后仍未找到匹配项，返回 -1
  return -1;
}

// KMP算法 O(n + m)
export function kmpSearch(haystack: string, needle: string) {
  // 如果 needle 是空字符串，直接返回 0
  if (needle.length === 0) {
    return 0;
  }

  // 1. 构建部分匹配表（PMT）
  const computeLPSArray = (pattern: string) => {
    const lps = new Array(pattern.length).fill(0); // 初始化 LPS 数组
    let length = 0; // lps[0] 总是 0
    let i = 1;

    while (i < pattern.length) {
      if (pattern[i] === pattern[length]) {
        length++;
        lps[i] = length;
        i++;
      } else {
        if (length !== 0) {
          length = lps[length - 1];
        } else {
          lps[i] = 0;
          i++;
        }
      }
    }
    return lps;
  };

  // 2. KMP 搜索过程
  const lps = computeLPSArray(needle);
  let i = 0; // 主字符串的指针
  let j = 0; // 模式字符串的指针

  while (i < haystack.length) {
    if (haystack[i] === needle[j]) {
      i++;
      j++;
    }

    if (j === needle.length) {
      return i - j; // 找到匹配，返回匹配的起始位置
    } else if (i < haystack.length && haystack[i] !== needle[j]) {
      if (j !== 0) {
        j = lps[j - 1]; // 利用 LPS 数组跳过不必要的比较
      } else {
        i++;
      }
    }
  }

  return -1; // 未找到匹配
}

// Rabin-Karp 算法 O(n + m) 在某些情况下可以比 KMP 算法更快，尤其是在模式字符串较短或主字符串较长时。
export function rabinKarpSearch(haystack: string, needle: string) {
  const MOD = 1000000007; // 一个较大的质数用于取模
  const d = 256; // 字符集大小（ASCII 字符集）

  const n = haystack.length;
  const m = needle.length;

  if (m === 0) return 0; // 如果 needle 是空字符串，直接返回 0
  if (n < m) return -1; // 如果 needle 比 haystack 长，直接返回 -1

  let h = 1; // 用于计算子串哈希值的系数
  let p = 0; // 模式字符串的哈希值
  let t = 0; // 主字符串子串的哈希值

  // 计算 h 和模式字符串的哈希值
  for (let i = 0; i < m - 1; i++) {
    h = (h * d) % MOD;
  }

  for (let i = 0; i < m; i++) {
    p = (p * d + needle.charCodeAt(i)) % MOD;
    t = (t * d + haystack.charCodeAt(i)) % MOD;
  }

  // 遍历主字符串，检查每个子串的哈希值
  for (let i = 0; i <= n - m; i++) {
    if (p === t) {
      // 如果哈希值匹配，进一步检查字符串是否完全匹配
      let j;
      for (j = 0; j < m; j++) {
        if (haystack[i + j] !== needle[j]) {
          break;
        }
      }
      if (j === m) {
        return i; // 找到匹配，返回起始位置
      }
    }

    // 如果不是最后一个子串，计算下一个子串的哈希值
    if (i < n - m) {
      t =
        (d * (t - haystack.charCodeAt(i) * h) + haystack.charCodeAt(i + m)) %
        MOD;
      if (t < 0) t += MOD; // 确保 t 是正数
    }
  }

  return -1; // 未找到匹配
}
