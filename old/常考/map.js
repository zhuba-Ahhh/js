Array.prototype.myMap = function (callback, thisArg) {
  let length = this.length;
  let res = [];
  if (!Array.isArray(this)) throw new TypeError('this is not an array');
  if (typeof callback !== 'function')
    throw new TypeError(callback + 'is not a function');
  if (length === 0) {
    return res;
  }
  for (let i = 0; i < length; i++) {
    res[i] = callback.call(thisArg, this[i], i, this);
  }
  return res;
};

Array.prototype.myReduce = function (callback, initValue) {
  if (!Array.isArray(this)) throw new TypeError('this is not an array');
  if (typeof callback !== 'function')
    throw new TypeError(callback + ' is not an function');
  let startIndex = initValue ? 0 : 1;
  let acc = initValue || this[0];
  for (let i = startIndex; i < this.length; i++) {
    let cur = this[i];
    acc = callback(acc, cur, i, this);
  }
  return acc;
};

Array.prototype.myFilter = function (callback, thisArg) {
  let length = this.length;
  let res = [];
  if (!Array.isArray(this)) throw new TypeError('this is not an array');
  if (typeof callback !== 'function')
    throw new TypeError(callback + 'is not a function');
  if (length === 0) return res;
  for (let i = 0; i < length; i++) {
    if (callback.call(thisArg, this[i], i, this)) {
      res.push(this[i]);
    }
  }
  return res;
};

Array.prototype.myForEach = function (callback, thisArg) {
  let length = this.length;
  if (!Array.isArray(this)) throw new TypeError('this is not an array');
  if (typeof callback !== 'function')
    throw new TypeError(callback + ' is not a function');
  for (let i = 0; i < length; i++) {
    callback.call(thisArg, this[i], i, this);
  }
};

console.log(Array);
let arr = [1, 2, 3];
console.log(arr.myReduce((pre, cur) => pre + cur));
console.log(arr.myMap(item => item > 1));
console.log(arr.myFilter(item => item > 1));
arr.myForEach(item => console.log(item));
