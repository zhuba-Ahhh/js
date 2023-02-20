Function.prototype.hybind = function (thisArg, ...argArray) {
  var fn = this;

  thisArg =
    thisArg !== null && thisArg !== undefined ? Object(thisArg) : window;

  function proxyFn(...args) {
    thisArg.fn = fn;
    var finalArgs = [...argArray, ...args];
    var result = thisArg.fn(finalArgs);
    delete thisArg.fn;
    return result;
  }

  return proxyFn;
};
