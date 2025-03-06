function People(name) {
  this.name = name;
}

People.prototype.getName = function () {
  console.log(this.name);
};

let people = new People("ZH");
console.log(people.name);
people.getName();

function Student(name, age) {
  People.call(this, name);
  this.age = age;
}

let protoType = Object.create(People.prototype);
Student.prototype = protoType;
protoType.contructor = Student;

let XM = new Student("ZHUBA", 20);
console.log(XM.name, XM.age);
XM.getName();

Promise.All = function (promises) {
  let arr = [],
    l = promises.length,
    cnt = 0;

  return new Promise((resolve, reject) => {
    promises.forEach((promise, index) => {
      promise
        .resolve(item)
        .then((res) => {
          arr[index] = res;
          cnt++;
          if (cnt === l) resolve(arr);
        })
        .catch((err) => reject(err));
    });
  });
};

Promise.race = function (promises) {
  return new Promise((resolve, reject) => {
    promises.forEach((promise) => {
      Promise.resolve(promise).then(resolve, reject);
    });
  });
};

// 创建一个空对象。
// 获取函数参数。
// 将实例对象的隐式原型和构造函数的显示原型连接起来。
// 将构造函数中的方法和属性都继承给实例对象。
// 判断返回值类型， 如果是值类型， 就返回创建的对象， 如果是引用对象， 就返回引用的对象。

let __new = function (fn, ...args) {
  let newObj = {};
  newObj.__proto__ = fn.prototype;

  let res = fn.call(fn, args);
  console.log(typeof res);
  return typeof res == "object" ? res : newObj;
};

function curry(fn) {
  const args = [];
  return function result(...rest) {
    if (!rest.length) return fn(...args);
    args.push(...rest);
    return result;
  };
}

function Curry(fn) {
  let l = fn.length,
    args = [];
  return function result(...rest) {
    args = [...args, ...rest];

    if (args.length < l) return result;
    else return fn.apply(this, args.slice(0, l));
  };
}

Function.prototype.Bind = function (context, ...bindArgs) {
  const self = this;

  return function (...args) {
    const newArgs = bindArgs.concat(args);
    return self.apply(context, newArgs);
  };
};

function getType(x) {
  const originType = Object.prototype.toString.call(x);
  const spaceIndex = originType.indexOf(" ");
  const type = originType.slice(spaceIndex + 1, -1);

  return type.toLowerCase();
}
