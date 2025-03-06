// 编写一个生成器函数，并返回一个可以生成 斐波那契数列 的生成器对象。

function* fibGenerator() {
  const dp = new Array(51).fill(0);
  dp[0] = 0;
  dp[1] = 1;
  for (let i = 2; i <= 50; i++) {
      dp[i] = dp[i - 1] + dp[i - 2];
  }

  while (dp.length) {
      yield dp.shift();
  }
};

/**
* const gen = fibGenerator();
* gen.next().value; // 0
* gen.next().value; // 1
*/