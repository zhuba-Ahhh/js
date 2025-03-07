// 测试工具函数集合

// 用于比较两个值是否相等（包括数组和对象的深度比较）
function assertEquals<T>(actual: T, expected: T): boolean {
  const actualStr = JSON.stringify(actual);
  const expectedStr = JSON.stringify(expected);
  if (actualStr !== expectedStr) {
    console.error(
      `\n测试失败！\n期望值: ${expectedStr}\n实际值: ${actualStr}\n`
    );
    return false;
  }
  console.log('✓ 测试通过');
  return true;
}

// 运行测试用例
interface TestCase<T extends any[], R> {
  input: T;
  expected: R;
}

function runTest<T extends any[], R>(
  fn: (...args: T) => R,
  testCases: TestCase<T, R>[]
): void {
  console.log(`\n开始测试 ${fn.name}:\n`);
  let passed = 0;

  testCases.forEach((testCase, index) => {
    const { input, expected } = testCase;
    console.log(`测试用例 ${index + 1}:`);
    console.log('输入:', ...input);
    console.log('期望输出:', expected);

    const start = performance.now();
    const actual = fn(...input);
    const end = performance.now();

    console.log('实际输出:', actual);
    console.log(`执行时间: ${(end - start).toFixed(2)}ms`);

    if (assertEquals(actual, expected)) {
      passed++;
    }
    console.log('-------------------');
  });

  console.log(`\n测试完成: ${passed}/${testCases.length} 个用例通过\n`);
}

// 二叉树节点的类型定义
export class TreeNode {
  val: number;
  left: TreeNode | null;
  right: TreeNode | null;
  constructor(val?: number, left?: TreeNode | null, right?: TreeNode | null) {
    this.val = val === undefined ? 0 : val;
    this.left = left === undefined ? null : left;
    this.right = right === undefined ? null : right;
  }
}

// 从数组构建二叉树（层序遍历数组）
export function buildTree(values: (number | null)[]): TreeNode | null {
  if (!values.length) return null;

  const root = new TreeNode(values[0]!);
  const queue = [root];
  let i = 1;

  while (queue.length && i < values.length) {
    const node = queue.shift()!;

    // 构建左子节点
    if (i < values.length && values[i] !== null) {
      const value = values[i];
      if (typeof value === 'number') {
        node.left = new TreeNode(value);
        queue.push(node.left);
      }
    }
    i++;

    // 构建右子节点
    if (i < values.length && values[i] !== null) {
      const value = values[i];
      if (typeof value === 'number') {
        node.right = new TreeNode(value);
        queue.push(node.right);
      }
    }
    i++;
  }

  return root;
}

// 将二叉树转换为数组（用于测试结果比较）
export function treeToArray(root: TreeNode | null): (number | null)[] {
  if (!root) return [];

  const result: (number | null)[] = [];
  const queue = [root];

  while (queue.length) {
    const node = queue.shift()!;
    result.push(node.val);

    if (node.left) {
      queue.push(node.left);
    } else if (queue.length) {
      result.push(null);
    }

    if (node.right) {
      queue.push(node.right);
    } else if (queue.length) {
      result.push(null);
    }
  }

  // 移除末尾的null
  while (result[result.length - 1] === null) {
    result.pop();
  }

  return result;
}

export { assertEquals, runTest };
