const fs = require('fs');

function delDir(dirFile) {
  const filesArr = fs.readdirSync(dirFile);
  for (let i of filesArr) {
    let file = dirFile + '/' + i;
    let stat = fs.statSync(file);
    // 判断是文件还是目录
    if (stat.isFile()) {
      fs.unlinkSync(file);
    } else if (stat.isDirectory) {
      // 递归调用
      delDir(file);
    }
  }
  fs.rmdirSync(dirFile);
}

let dirFile = './img';
delDir(dirFile);
