let myFreeze = function (object) {
  let freeze = (item) => {
    Object.defineProperty(object, item, {
      writable: false,
      configurable: false,
    });
  };
  for (let item in object) {
    item instanceof Object && myFreeze(item); //递归
    !(item instanceof Object) && freeze(item);
  }
  Object.seal(object);
};
