// 防抖
var Debounce = function(fn, t) {
  let timer = null;
  return function(...args) {
      timer && clearTimeout(timer);
      timer = setTimeout(() => fn.apply(this, args),t);
  }
};

function debounce(fn, wait) {
  let timer = null;
  return function () {
    let context = this,
      args = arguments;
    // 如果此时存在定时器的话，则取消之前的定时器重新记时
    if (timer) {
      clearTimeout(timer);
      timer = null;
    }
    // 设置定时器，使事件间隔指定事件后执行
    timer = setTimeout(() => {
      fn.apply(context, args);
    }, wait);
  };
}
// 防抖1
function debounce(fun, waittime) {
  let timeout; //设置定时器
  return function () {
    if (timeout) //如果存在定时器则清空
      clearTimeout(timeout);
    //如果没有定时器则执行下面函数
    timeout = setTimeout(function () {
      fun.apply(this); //函数调用
    }, waittime)
  }
}

// 防抖2
function debounce(fn, dur) {
  dur = dur || 100;
  var timer;
  return function () {
    clearTimeout(timer);
    timer = setTimeout(() => {
      fn.apply(this, arguments);
    }, dur);
  }
}

// 节流
function throttle(fn, delay) {
  let curTime = Date.now();
  return function () {
    let context = this,
      args = arguments,
      nowTime = Date.now();
    // 如果两次时间间隔超过了指定时间，则执行函数。
    if (nowTime - curTime >= delay) {
      curTime = Date.now();
      return fn.apply(context, args);
    }
  };
}