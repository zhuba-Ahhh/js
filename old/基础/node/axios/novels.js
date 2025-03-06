let axios = require('axios');

let url = 'https://www.23qb.com//book/220921/86497271.html';

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
  let response = await axi(url);
  return response;
}

async function getType(url) {
  const Body = await getUrl(url);
  console.log(Body.data);
  console.log(result);
}

getType(url);
