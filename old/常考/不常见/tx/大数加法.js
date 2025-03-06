/**
 *
 * 大数加法
 * @param {*} num1
 * @param {*} num2
 * @return {*} string
 */
const addStrings = (num1, num2) => {
  let i = num1.length - 1;
  let j = num2.length - 1;
  let carry = 0;
  let result = [];

  while (i >= 0 || j >= 0 || carry > 0) {
    const n1 = i >= 0 ? +num1[i] : 0;
    const n2 = j >= 0 ? +num2[j] : 0;
    const sum = n1 + n2 + carry;
    result.push(String(sum % 10));
    carry = Math.floor(sum / 10);
    i--;
    j--;
  }

  return result.reverse().join('') || '0';
};

console.log(addStrings('11111111', '2222222222222222'));
