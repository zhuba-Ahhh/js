// 目标日期时间，假设为2023年1月1日00:00:00
const targetDate = new Date('2023-06-21T00:00:00');

// 每秒更新剩余时间
const timer = setInterval(updateCountdown, 1000);

function updateCountdown() {
  // 计算距离目标日期时间还有多少毫秒
  const timeLeftMs = targetDate - new Date();

  // 如果已经过了目标日期时间，则停止计时器
  if (timeLeftMs < 0) {
    clearInterval(timer);
    return;
  }

  // 计算剩余天数、小时数、分钟数和秒数
  const days = Math.floor(timeLeftMs / (24 * 60 * 60 * 1000));
  const hours = Math.floor(
    (timeLeftMs % (24 * 60 * 60 * 1000)) / (60 * 60 * 1000)
  );
  const minutes = Math.floor((timeLeftMs % (60 * 60 * 1000)) / (60 * 1000));
  const seconds = Math.floor((timeLeftMs % (60 * 1000)) / 1000);

  // 更新页面上的倒计时显示
  // document.getElementById('countdown').innerHTML = `剩余时间：${days} 天 ${hours} 小时 ${minutes} 分钟 ${seconds} 秒`;

  console.log(
    `剩余时间：${days} 天 ${hours} 小时 ${minutes} 分钟 ${seconds} 秒`
  );
}

updateCountdown();
