function MyInstanceOf(obj, createFnc) {
  let proto = Object.getPrototypeOf(obj); // 原型链上对象，可以依次向上找
  const prototype = createFnc.prototype; // 当前obj对象的原型写死的

  while (true) {
    // 向上找
    if (!proto) return false; // 如果原型链到顶了返回false
    if (proto == prototype) return true; // 找到了返回true
    proto = Object.getPrototypeOf(proto); // proto沿原型链向上
  }
}

let stu1 = {
  name: "xx",
  age: 20,
};
console.log(MyInstanceOf(stu1, Object));
console.log(stu1.prototype instanceof Object);
console.log(Function.prototype);

function myInstanceof1(left, right) {
  while (true) {
    if (left === null) {
      return false;
    }
    if (left.__proto__ === right.prototype) {
      return true;
    }
    left = left.__proto__;
  }
}
