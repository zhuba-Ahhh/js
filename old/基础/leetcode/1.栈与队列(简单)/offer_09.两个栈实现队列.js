// 2022-10-08-0
var CQueue = function () {
  this.stackA = []; //创建进入栈
  this.stackB = []; //创建弹出栈
};

CQueue.prototype.appendTail = function (value) {
  this.stackA.push(value); //进入栈加入数据
};

CQueue.prototype.deleteHead = function () {
  //第一次判断栈B是否有数据，如果没有就把栈A的数据压入栈B
  if (this.stackB.length == 0) {
    while (this.stackA.length) {
      this.stackB.push(this.stackA.pop());
    }
  }
  //二次判断栈B长度 如果还是没有返回-1
  if (this.stackB.length == 0) {
    return -1;
  }
  //弹出栈B的头部数据
  return this.stackB.pop();
};
