// 方法一
// var reverseLeftWords = function (s, n) {
//   var result = "";
//   var len = s.length;
//   for (var i = 0; i < len; i++) {
//     result += s[(i + n) % len];
//   }
//   return result;
// };

// 方法二 双字符串法
var reverseLeftWords = function (s, n) {
  const len = s.length;
  const doublestr = `${s}${s}`;
  return doublestr.slice(n, n + len);
};
