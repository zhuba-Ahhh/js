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

export { assertEquals, runTest };
