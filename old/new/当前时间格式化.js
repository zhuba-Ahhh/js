const now = new Date();

/**
 *
 *
 * @param {*} now 时间戳
 * @return {*}
 */
function changeTime(now) {
  const year = now.getFullYear();
  const month = String(now.getMonth() + 1).padStart(2, '0');
  const day = String(now.getDate()).padStart(2, '0');
  const hours = String(now.getHours()).padStart(2, '0');
  const minutes = String(now.getMinutes()).padStart(2, '0');
  const seconds = String(now.getSeconds()).padStart(2, '0');

  return `${year}-${month}-${day} ${hours}:${minutes}:${seconds}`;
}

/**
 *
 *
 * @param {*} time s / 秒
 * @return {*}
 */
function overTime(time) {
  return new Promise((reslove, reject) => {
    const timer = setInterval(() => {
      if (time <= 0) {
        clearInterval(timer);
        reslove();
      } else {
        console.log(changeTime(new Date()));
      }
      time -= 1;
    }, 1000);
  });
}

overTime(60);
