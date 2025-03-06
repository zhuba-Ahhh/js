// 显示当前时间
const getTime = () => {
  return new Date().toLocaleString();
};

// console.log(getTime());
function decodeString(str) {
  const stack = [];
  let currStr = '';
  let currNum = 0;

  for (let i = 0; i < str.length; i++) {
    const char = str[i];

    if (/\d/.test(char)) {
      currNum = currNum * 10 + parseInt(char);
    } else if (char === '(') {
      stack.push(currNum);
      currNum = 0;
      stack.push(currStr);
      currStr = '';
    } else if (char === ')') {
      const prevStr = stack.pop();
      const repeatTimes = stack.pop();
      currStr = prevStr + currStr.repeat(repeatTimes);
    } else {
      currStr += char;
    }
  }

  return currStr;
}

console.log(decodeString('20(2(ab)1(c))')); // ababcababc
