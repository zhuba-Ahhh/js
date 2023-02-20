Promise.race = function (args) {
  return new Promise((resolve, reject) => {
    for (let i = 0, len = args.length; i < len; i++) {
      args[i].then(resolve, reject)
    }
  })
}

Promise.race = function (args) {
  return new Promise((resolve, reject) => {
    for (let i = 0, l = args.length; i < l; i++) {
      args[i].then(resolve, reject);
    }
  })
}
