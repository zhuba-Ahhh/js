const SERVER_URL = '/server';

let xhr = new XMLHttpRequest();

xhr.open('GET', url, true);
xhr.send();
xhr.onreadystatechange = function (require, response) {
  if (xhr.readyState === 4) {
    if (xhr.status >= 200 && xhr.status < 300) {
      console.log(response);
    } else {
      console.log('err');
    }
  }
};
function getAjax(url) {
  return new Promise(function (resolve, reject) {
    let xhr = new XMLHttpRequest();
    xhr.open('GET', url);
    xhr.onreadystatechange = function () {
      if (xhr.status >= 200 && xhr.status < 300 && xhr.readyState == 4) {
        resolve(xhr.response);
        console.log(xhr.response);
      } else if (xhr.readyState == 4 && xhr.status != 200) {
        reject(xhr);
      }
    };
    xhr.send();
  });
}
getAjax(url).then(
  res => {
    console.log(res);
  },
  err => console.log(err)
);
