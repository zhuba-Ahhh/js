function myAll(iterators) {
  const promises = Array.from(iterators);
  const values = [];
  return new Promise((resolve, reject) => {
    promises.forEach(p => {
      p.then((data, err) => {
        if (err) {
          reject(err);
        }
        values.push(data);
        if (values.length === promises.length) {
          resolve(values);
        }
      });
    });
  });
}
