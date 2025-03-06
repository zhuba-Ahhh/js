const express = require("express");

const app = express();
app.use(express.static(__dirname + "/static")); // 默认index.html

app.get("/person", (req, res) => {
  // 请求/person端口时回调
  res.send({
    name: "tom",
    age: 18,
  });
});

app.listen(5005, (err) => {
  if (!err) console.log("服务器启动成功了！ 请访问：" + "127.0.0.1:5005");
});
