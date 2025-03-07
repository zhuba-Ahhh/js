import { shuffle, shuffleAdvanced, shuffleInPlace } from '../洗牌算法';

describe('洗牌算法测试', () => {
  const testArray = [1, 2, 3, 4, 5];

  describe('基础Fisher-Yates洗牌算法', () => {
    test('返回数组长度应该保持不变', () => {
      const result = shuffle(testArray);
      expect(result.length).toBe(testArray.length);
    });

    test('返回数组应该包含原数组的所有元素', () => {
      const result = shuffle(testArray);
      expect(new Set(result)).toEqual(new Set(testArray));
    });

    test('原数组不应被修改', () => {
      const original = [...testArray];
      shuffle(testArray);
      expect(testArray).toEqual(original);
    });

    test('多次洗牌应该产生不同的排列', () => {
      const results = new Set();
      for (let i = 0; i < 100; i++) {
        results.add(JSON.stringify(shuffle(testArray)));
      }
      // 在100次洗牌中，至少应该产生多个不同的排列
      expect(results.size).toBeGreaterThan(1);
    });
  });

  describe('优化版Fisher-Yates洗牌算法', () => {
    test('支持自定义随机数生成函数', () => {
      const mockRandom = jest
        .fn()
        .mockReturnValueOnce(0.5)
        .mockReturnValueOnce(0.3)
        .mockReturnValueOnce(0.8)
        .mockReturnValueOnce(0.1);

      shuffleAdvanced(testArray, mockRandom);
      expect(mockRandom).toHaveBeenCalled();
    });

    test('返回数组应该包含原数组的所有元素', () => {
      const result = shuffleAdvanced(testArray);
      expect(new Set(result)).toEqual(new Set(testArray));
    });
  });

  describe('原地洗牌算法', () => {
    test('应该修改原数组', () => {
      const original = [...testArray];
      const result = shuffleInPlace([...testArray]);
      expect(result).not.toEqual(original);
    });

    test('返回的数组应该是原数组的引用', () => {
      const arr = [...testArray];
      const result = shuffleInPlace(arr);
      expect(result).toBe(arr);
    });

    test('返回数组应该包含原数组的所有元素', () => {
      const arr = [...testArray];
      const result = shuffleInPlace(arr);
      expect(new Set(result)).toEqual(new Set(testArray));
    });
  });
});
