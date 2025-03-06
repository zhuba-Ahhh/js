let events = require('events');
// 创建事件对象
let eventLog = new events.EventEmitter();
// 监听事件
eventLog.on('MkDir', () => {
  console.log('创建目录事件触发');
});
// 触发事件
eventLog.emit('MkDir');
console.log('Over');
