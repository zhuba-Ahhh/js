function getRandomHexColor() {
  const letters = '0123456789ABCDEF';
  let color = '#';

  for (let i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }

  return color;
}

// 示例
console.log(getRandomHexColor()); // 输出一个随机的16进制颜色，例如 #3A8C12
