const fs = require("fs");

let rs = fs.createReadStream("./There is no network.png");
let ws = fs.createWriteStream("./pipe.png");
// 创建管道，将读取流通过管道流出
rs.pipe(ws);
