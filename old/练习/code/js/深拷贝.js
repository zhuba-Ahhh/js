const obj = {
  a: 1,
  b: {
    a: 2
  }
};
// 1. JSON
let obj1 = JSON.parse(JSON.stringify(obj));
console.log(obj1);

// 2. 递归

function deepClone(obj, cache = new WeakMap()) {
  if (obj === null || typeof obj !== 'object') return obj
  if (obj instanceof Date) return new Date(obj)
  if (obj instanceof RegExp) return new RegExp(obj)

  if (cache.has(obj)) return cache.get(obj) // 如果出现循环引用，则返回缓存的对象，防止递归进入死循环
  let cloneObj = new obj.constructor() // 使用对象所属的构造函数创建一个新对象
  cache.set(obj, cloneObj) // 缓存对象，用于循环引用的情况

  for (let key in obj) {
    if (obj.hasOwnProperty(key)) {
      cloneObj[key] = deepClone(obj[key], cache) // 递归拷贝
    }
  }
  return cloneObj
}

console.log(deepClone(obj));