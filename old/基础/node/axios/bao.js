let axios = require("axios");
let cheerio = require("cheerio");
let fs = require("fs");
let path = require("path");

let id = 7;
let url = "https://fabiaoqing.com/biaoqing/lists/page/`${id}`";

function axi(url) {
  return new Promise(function (resolve, reject) {
    axios
      .get(url)
      .then(function (res) {
        resolve(res);
      })
      .then(function (err) {
        reject(err);
      });
  });
}
async function getUrl(url) {
  let data = await axi(url);
  let $ = cheerio.load(data.data); // 获取数据和axios一样的jQuery库
  // console.log($);
  $(".lazy").each((i, element) => {
    let imgs = $(element).attr("data-original");
    // let p = path.parse(imgs);
    // console.log(p);
    let extName = path.extname(imgs);
    let ws = fs.createWriteStream(`./img/${i}${extName}`); // 创建流

    axios
      .get(imgs, {
        responseType: "stream",
      })
      .then(function (res) {
        res.data.pipe(ws); // 获取到的数据传给
      });
  });
  return $;
}

for (let i = 1; i < 6; i++) {
  getUrl(url);
  id++;
}
console.log(id);
