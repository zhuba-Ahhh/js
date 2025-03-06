// wrong 待修正
// function deepClone(obj) {
//     if (!obj || typeof Object !== "object") return;

//     let newObj = Array.isArray(obj) ? [] : {};
//     for (let key in obj) {
//         if (obj.hasOwnProperty(key)) {
//             newObj[key] =
//                 typeof obj[key] === "object" ? deepClone(obj[key]) : obj[key];
//         }
//     }
//     return newObj;
// }

function isObject(val) {
  return typeof val === 'object' && val !== null;
}

function deepClone(obj, hash = new WeakMap()) {
  if (!isObject(obj)) return obj;
  if (hash.has(obj)) {
    return hash.get(obj);
  }
  let target = Array.isArray(obj) ? [] : {};
  hash.set(obj, target);
  Reflect.ownKeys(obj).forEach(item => {
    if (isObject(obj[item])) {
      target[item] = deepClone(obj[item], hash);
    } else {
      target[item] = obj[item];
    }
  });

  return target;
}
var obj1 = {
  a: 1,
  b: {
    a: 2,
  },
};
var obj2 = deepClone(obj1);
obj2.a = 10;
console.log(obj1);
console.log(obj2);
// { a: 1, b: { a: 2 } }
// { a: 10, b: { a: 2 } }
