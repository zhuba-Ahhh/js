function _new(fn, ...arg) {
  let obj = Object.create(fn.prototype);
  let result = fn.apply(obj, ...arg);
  return Object.prototype.toString.call(result) == '[object object]' ? result : obj;
}

function _new(fn, ...arg) {
  let obj = Object.create(fn.prototype); // 创建空对象并且其prototype指向构造函数的原型对象
  let result = fn.apply(obj, ...arg); // 将空对象赋值构造函数内部的this,用构造函数内部的方法修改空对象
  return result instanceof Object ? result : obj; // 如果构造函数返回一个非基本类型的值，则返回这个值，否则返回刚创建的对象
}

// 1. 创建了一个空的对象
// 2. 将空对象的原型，指向于构造函数的原型
// 3. 将空对象作为构造函数的上下文（改变this指向）
// 4. 对构造函数有返回值的处理判断

function __new(fn, ...args) {
  let obj = Object.create(fn.prototype);
  let result = fn.apply(obj, ...args);
  return result instanceof Object ? result : obj;
}

function new_(fn, ...args) {
  let obj = Object.create(fn.prototype);
  let result = fn.apply(obj, ...args);
  return result instanceof Object ? result : obj;
}

const newObj = function (className, ...arg) {
  const obj = {};
  obj.__proto__ = className.prototype;
  let res = className.apply(obj, ...arg);
  return res instanceof Object ? res : obj;
}