function getMaxLengthOfWords(str) {
  const pattern = /[a-zA-Z]+/g; // 匹配全英文单词
  let match;
  let maxLength = 0;
  while ((match = pattern.exec(str))) {
    const word = match[0];
    if (word === word.toUpperCase() || word === word.toLowerCase()) {
      maxLength = Math.max(maxLength, word.length); // 找到最长的长度
    }
  }
  return maxLength;
}

console.log(getMaxLengthOfWords("help bed little0 work"));

// let str1 = "help bed little0 work";

// let reg = /[a-zA-Z0-9]+/g;
// let regN = /[0-9]+/g;
// let strArr = str1.split(' ');
// const findMaxLengthAviableWord = (str) => {
//     let maxL = 0;
//     let curL = 0;
//     let match;
//     while ((match = reg.exec(str)) !== null) {
//         const viableStr = match[0];
//         const isAllUpper = viableStr.toUpperCase() === viableStr;
//         const isAllLower = viableStr.toLowerCase() === viableStr;
//         if ((isAllLower || isAllUpper) && !viableStr.match(regN)) {
//             curL = viableStr.length;
//             maxL = curL > maxL ? curL : maxL;
//         }
//     }

//     return maxL;
// } 

// let ml = 0;
// let cl = 0;
// for (let item of strArr) {
//     cl = findMaxLengthAviableWord(item);
//     ml = ml > cl ? ml : cl;
// }


// console.log(ml);