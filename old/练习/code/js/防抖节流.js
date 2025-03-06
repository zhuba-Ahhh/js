// 防抖
function debounce(fn, waittime) {
  let timeout;
  return function () {
    if (tiemout) clearTimeout(timeout);
    timeout = setTimeout(function () {
      fn.apply(this);
    }, waittime);
  };
}
// 节流 throttle
function throttle(fn, waittime) {
  let timeout;
  return function () {
    if (!timeout) {
      timeout = setTimeout(() => {
        timeout = null;
        fn.apply(this);
      }, waittime);
    }
  };
}

function debounce(fn, delay) {
  let timer = 0;
  return function (...args) {
    // 保存上下文
    const _this = this;
    const _args = args;
    clearTimeout(timer);
    setTimeout(() => {
      fn.call(_this, ..._args);
    }, delay);
  };
}
