var MinStack = function () {
  this.stackA = []; //主栈
  this.stackB = [Infinity]; //辅助栈
};

MinStack.prototype.push = function (x) {
  this.stackA.push(x); //主栈正常推入
  this.stackB.push(Math.min(x, this.stackB[this.stackB.length - 1])); //将较小的值推入
};

MinStack.prototype.pop = function () {
  this.stackA.pop(); //弹出栈
  this.stackB.pop(); //弹出栈
};

MinStack.prototype.top = function () {
  return this.stackA[this.stackA.length - 1];
};

MinStack.prototype.min = function () {
  return this.stackB[this.stackB.length - 1];
};
