const fs = require('fs');

let rs = fs.createReadStream('There is no network.png');
let ws = fs.createWriteStream('T1.png');

// 监听读取流打开
rs.once('open', () => {
  console.log('监听读取流打开');
});
// 监听读取流关闭
rs.once('close', () => {
  console.log('监听读取流关闭');
});
ws.once('open', () => {
  console.log('监听写入流打开');
});
ws.once('close', () => {
  console.log('监听写入流打开');
});

// 写入数据
rs.on('data', data => {
  ws.write(data);
});
