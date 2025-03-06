const ObjectCeate = (proto) => {
  if (proto === null || typeof proto !== "object") return;

  // 判断传入参数是否不为空且不为实例
  // 新建一个空函数
  // 将传入的构造函数指向fn
  // 返回实例化后的结果

  const fn = function () {};
  fn.prototype = proto;
  return new fn();
};
