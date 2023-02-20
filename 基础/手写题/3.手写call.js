Function.prototype.mycall = function (thisArg, arr) {
  //获取原本的函数
  var fn = this;
  //对传入的参数进行判断
  thisArg = thisArg != null && thisArg != undefined ? Object(thisArg) : window;
  const s1 = Symbol("mycall");
  thisArg[s1] = fn;
  let arr1 = arr || [];
  let result = thisArg[s1](...arr1);
  delete thisArg[s1];
  return result;
};