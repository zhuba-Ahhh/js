function parseUrl(url) {
  let args = url.substr(url.indexOf("?") + 1);
  let arr = args.split("&");
  let obj = {};
  arr.forEach((el) => {
    let pos = el.indexOf("=");
    let key = el.substr(0, pos);
    let val = el.substr(pos + 1);
    if (Number.isNaN(parseFloat(val))) {
      //不是数值型不转
      obj[key] = val;
    } else {
      //否则转
      obj[key] = parseFloat(val);
    }
  });
  return obj;
}
let str = "https://www.meituan.com/index.html?a=test&b=2.1";
console.log("parseUrl", parseUrl(str));

// parseQueryString() 函数接收一个 URL 作为参数，截取其中的参数字符串并通过 URLSearchParams 实例化一个新的对象。
// 然后，使用 for..of 循环遍历 params 对象的每一个键值对，并将其添加到 result 对象中。最终，返回该对象作为结果。
function parseQueryString(url) {
  const queryString = url.split("?")[1];
  const params = new URLSearchParams(queryString);
  const result = {};

  for (const [key, value] of params.entries()) {
    result[key] = value;
  }

  return result;
}

// 示例用法
const url = "https://www.example.com/path?key1=value1&key2=value2";
const paramsObject = parseQueryString(url);
console.log("parseQueryString", paramsObject); // { key1: "value1", key2: "value2" }

// 获取URL中的查询字符串部分，然后按照“key=value”对将其拆分成键值对数组。
// 接着循环遍历这个数组，对于每个键值对，使用decodeURIComponent函数对其进行解码，
// 并将结果存储到一个对象中。最后返回这个对象即可。

function parseQueryString1(url) {
  var queryString = url.split("?")[1];
  if (!queryString) {
    return {};
  }

  var keyValuePairs = queryString.split("&");
  var params = {};

  keyValuePairs.forEach(function (keyValuePair) {
    var pair = keyValuePair.split("=");
    var key = decodeURIComponent(pair[0]);
    var value = decodeURIComponent(pair[1] || "");

    if (params.hasOwnProperty(key)) {
      params[key] = [].concat(params[key], value);
    } else {
      params[key] = value;
    }
  });

  return params;
}

var url1 = "https://www.example.com/search?query=apple&lang=en";
var params1 = parseQueryString1(url1);

console.log(params1); // { query: 'apple', lang: 'en' }
