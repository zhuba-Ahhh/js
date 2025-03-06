var replaceSpace = function (s) {
  var result = "";
  for (const item of s) {
    if (item == " ") {
      result += "%20";
      continue;
    }
    result += item;
  }
  return result;
};
