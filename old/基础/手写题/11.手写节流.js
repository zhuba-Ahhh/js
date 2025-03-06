// function throttle(fn, interval) {
//   let lastTime = 0;
//   const _throttle = function (...args) {
//     const nowTime = new Date().getTime();
//     const remainTime = interval - (nowTime - lastTime);
//     if (remainTime <= 0) {
//       fn.call(...args);
//       lastTime = nowTime;
//     }
//   };
//   return _throttle;
// }

function throttle(fn, interval) {
  let lastTime = 0;
  const _throttle = function (...args) {
    const nowTime = new Date().getTime();
    const remainTime = interval - (nowTime - lastTime);
    if (remainTime <= 0) {
      fn.call(this,...args);
      lastTime = nowTime;
    }
  };
  return _throttle;
}
