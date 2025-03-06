// let axios = require('axios');
let request = require('request');
let fs = require('fs');
let path = require('path');

let url = 'https://www.23qb.com/book/220921/';

// axios.get(url).then(function (res) {
//     console.log(res)
// });
// axios.get(url).then((res) => console.log(res));

// function axi(url) {
//     return new Promise(function (reslove, reject) {
//         axios.get(url).then(function (res) {
//             reslove(res);
//         }).then(function (err) {
//             reject(err);
//         });
//     })
// }
// async function GetUrl1(url) {
//     let response = await req(url);
//     console.log(response);
// }

// GetUrl1(url);

function req(url) {
  return new Promise(function (reslove, reject) {
    request.get(url, function (err, response, body) {
      if (err) {
        reject(err);
      } else {
        reslove({
          response,
          body,
        });
      }
    });
  });
}

async function getUrl(url) {
  let { response, body } = await req(url);

  const reg = /全部<\/a>(.*?)<\/div>/gis,
    reg1 = /<a.*?location.href=\'(.*?)\';return false;" >(.*?)</gis;
  let result = reg.exec(body);
  let urlClass = [],
    res,
    uid = 0;
  while ((res = reg1.exec(result[1]))) {
    let obj = {
      id: uid++,
      url: res[1],
      name: res[2],
    };
    urlClass.push(obj);
    getMovies(res[1], res[2], uid - 1);
  }
}

async function getMovies(url, moviesType, id) {
  let { response, body } = await req(url);
  const reg =
    /<a class="pic-pack-outer" target="_blank" href="(.*?)" title="(.*?)">/gis;
  let res,
    arrList = [];
  while ((res = reg.exec(body))) {
    arrList.push(res[1]);
  }
  let temp = '';
  for (let i = 0; i < arrList.length; i++) {
    let { response, body } = await req(arrList[i]);
    if (i == 0) console.log('**分类** :' + moviesType + '\n\n');
    const reg = /playerBoxIntroCon">(.*?)<a href/gis,
      reg1 = /playerBox-info-cnName">(.*?)<\/h1>/gis;
    let res = reg.exec(body)[1],
      res1 = reg1.exec(body)[1];
    let ans = res1 + ':' + res + '\n\n';
    temp += ans;
  }
  // 写入
  const now = path.join(__dirname, 'movies', '/');
  p = now + moviesType + '.txt';
  console.log(p);
  fs.writeFile(p, temp, function (err) {
    if (err) {
      return console.error(err);
    } else {
    }
  });
}

getUrl(url);
