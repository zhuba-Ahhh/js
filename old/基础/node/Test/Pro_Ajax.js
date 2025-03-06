function sendAjax(url) {
  return new Promise(function (resolve, reject) {
    let xhr = new XMLHttpRequest();
    xhr.open("GET", url);
    // xhr.responseType = 'json';
    xhr.send();
    xhr.onreadystatechange = function () {
      if (xhr.readyState == 4) {
        if (xhr.status >= 200 && xhr.status < 300) {
          console.log(xhr);
          resolve(xhr.response);
        } else {
          reject(xhr.status);
        }
      }
    };
  }).then(
    (data) => console.log(data),
    (err) => console.warn(err),
  );
}

sendAjax("https://api.apiopen.top/api/getHaoKanVideo?page=0&size=10");
