function deepClone(obj) {
  if (!obj || typeof Object !== "object") return;

  let newObj = Array.isArray(obj) ? [] : {};
  for (let key in obj) {
    if (obj.hasOwnProperty(key)) {
      newObj[key] =
        typeof obj[key] === "object" ? deepClone(obj[key]) : obj[key];
    }
  }
  return newObj;
}
