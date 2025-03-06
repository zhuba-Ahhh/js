function myAssign(target, source) {
  if (arguments.length < 2) {
    return target;
  }
  source = Array.prototype.slice.call(arguments, 1);
  source.forEach((obj) => {
    for (key in obj) {
      if (Object.prototype.hasOwnProperty.call(obj, key)) {
        target[key] = obj[key];
      }
    }
  });
  return target;
}
