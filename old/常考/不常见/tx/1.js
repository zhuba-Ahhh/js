var a = [1, 2, 3, 4, 5]
var b = [2, 4, 6, 8, 10]

// 交集
const jiao = a.filter((item) => b.indexOf(item) !== -1);

// 并集
const bing = [...new Set([...a, ...b])];

// 补集
const bu = a.filter((item) => b.indexOf(item) === -1);

console.log(jiao, bing, bu);