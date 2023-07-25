function getMaxDepth(arr) {
  let maxDepth = 0;

  function calculateDepth(array, depth) {
    if (!Array.isArray(array)) {
      return;
    }

    maxDepth = Math.max(maxDepth, depth);

    for (let i = 0; i < array.length; i++) {
      calculateDepth(array[i], depth + 1);
    }
  }

  calculateDepth(arr, 1);

  return maxDepth;
}

function getMaxDepth1(arr) {
  let maxDepth = 0;
  let stack = [];

  stack.push({ array: arr, depth: 1 });

  while (stack.length > 0) {
    let { array, depth } = stack.pop();

    if (Array.isArray(array)) {
      maxDepth = Math.max(maxDepth, depth);

      for (let i = 0; i < array.length; i++) {
        stack.push({ array: array[i], depth: depth + 1 });
      }
    }
  }

  return maxDepth;
}

// 测试示例
const arr = [1, [2, [3, [4]]], [5, 6]];

console.log(getMaxDepth(arr)); // 输出 4
