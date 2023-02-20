function _flat(arr, depth) {
  if (!Array.isArray(arr) || depth <= 0) {
    return arr;
  }
  return arr.reduce((prev, cur) => {
    if (Array.isArray(cur)) {
      return prev.concat(_flat(cur, depth - 1))
    } else {
      return prev.concat(cur);
    }
  }, []);
}

function flat1(arr, depth) {
  if (!Array.isArray(arr) || depth <= 0) return arr;
  return arr.reduce((pre, cur) => {
    if (Array.isArray(cur)) {
      return pre.concat(flat1(cur, depth - 1));
    }
    return pre.concat(cur);
  }, [])
}