Function.prototype.myapply = function (thisArg, arr) {
  var fn = this;

  //对传入的参数进行判断
  thisArg = thisArg != null && thisArg != undefined ? Object(thisArg) : window;

  const s1 = Symbol("myapply");

  thisArg[s1] = fn;

  let result = thisArg[s1]();

  delete thisArg[s1];

  return result;
};
