function MyInstanceOf(obj, createFnc) {
  let proto = Object.getPrototypeOf(obj);
  const prototype = createFnc.prototype;

  while (true) {
    if (!proto) return false;
    if (proto == prototype) return true;
    proto = Object.getPrototypeOf(proto);
  }
}

let stu1 = {
  name: "xx",
  age: 20,
};
console.log(MyInstanceOf(stu1, Object));
console.log(Function.prototype instanceof Object);
console.log(Function.prototype);
