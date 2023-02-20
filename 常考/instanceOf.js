function myInstanceOf(obj, createFnc) {
  let proto = Object.getPrototypeOf(obj);
  const protoType = createFnc.prototype;
  while (true) {
    if (!proto) return false;
    if (proto === protoType) return true;
    proto = Object.getPrototypeOf(proto);
  }
}

const _instanof = (obj, createFnc) => {
  let proto = Object.getPrototypeOf(obj);
  const protoType = createFnc.prototype;
  while (true) {
    if (!proto) return false;
    if (proto === protoType) return true;
    proto = Object.getPrototypeOf(proto);
  }
}