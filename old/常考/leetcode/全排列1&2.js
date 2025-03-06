/**
 * @de 给定一个不含重复数字的数组 nums ，返回其 所有可能的全排列 。你可以 按任意顺序 返回答案。
 * @param {number[]} nums
 * @return {number[][]}
 * TC:O(2^n)   SC:O(n)
 */
const permute = nums => {
  const res = [],
    l = nums.length;

  const resurion = (Unused, used) => {
    if (used.length === l) {
      res.push(used);
      return;
    }

    for (let i = 0; i < Unused.length; i++) {
      if (Unused[i] !== null) {
        const temp = [...Unused]; // 深拷贝
        temp[i] = null;
        resurion(temp, [...used, Unused[i]]);
      }
    }
  };

  resurion(nums, []);
  return res;
};

/**
 * @de 给定一个可包含重复数字的序列 nums ，按任意顺序 返回所有不重复的全排列。
 * @param {number[]} nums
 * @return {number[][]} TC:O(2^n)   SC:O(n)
 */
const permuteUnique = nums => {
  nums.sort((a, b) => a - b);
  const res = [],
    l = nums.length;

  const resurion = (Unused, used) => {
    if (used.length === l) {
      res.push(used);
      return;
    }

    for (let i = 0; i < Unused.length; i++) {
      if (Unused[i] !== null && Unused[i] !== Unused[i + 1]) {
        const temp = [...Unused]; // 深拷贝
        temp[i] = null;
        resurion(temp, [...used, Unused[i]]);
      }
    }
  };

  resurion(nums, []);
  return res;
};
// 给定一个不含重复数字的数组 nums ，返回其 所有可能的全排列 。你可以 按任意顺序 返回答案。
function permute1(nums) {
  const res = [];
  const backtrack = path => {
    if (path.length === nums.length) {
      res.push(path);
      return;
    }
    nums.forEach(n => {
      if (path.includes(n)) return;
      backtrack(path.concat(n));
    });
  };
  backtrack([]);
  return res;
}

console.log('permute1', permute1([5, 1, 2, 4, 1]));
// 给定一个可包含重复数字的序列 nums ，按任意顺序 返回所有不重复的全排列。
function permuteUnique1(nums) {
  const res = [];
  const backtrack = (path, used) => {
    if (path.length === nums.length) {
      res.push(path);
      return;
    }
    nums.forEach((n, i) => {
      if (used[i]) return;
      if (i > 0 && nums[i] === nums[i - 1] && !used[i - 1]) return;
      used[i] = true;
      backtrack(path.concat(n), used);
      used[i] = false;
    });
  };
  backtrack([], []);
  return res;
}
console.log('permuteUnique1', permuteUnique1([5, 1, 2, 4, 1]));
