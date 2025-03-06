function fsRead(path) {
  return new Promise((resolve, reject) => {
    require('fs').readFile(path, (err, data) => {
      if (err) reject(err);
      resolve(data);
    });
  }).then(
    value => {
      console.log(value.toString());
    },
    reason => {
      console.warn(reason);
    }
  );
}

// 调用
fsRead('./1.txt');
