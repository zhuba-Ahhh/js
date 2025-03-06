let arr = [1, 1, 1, 3];

function setArr(arr) {
  let res = [];
  let n = arr.length;
  let l = 0,
    r = 1;
  while (r < n) {
    if (arr[r] == arr[r - 1] || arr[r] == arr[r - 1] + 1) {
      r++;
    } else {
      let str = '';
      str += arr[l];
      if (arr[r - 1] != arr[l]) str += '-' + arr[r - 1];
      res.push(str);
      l = r;
      r = r + 1;
    }
  }
  let str = '';
  str += arr[l];
  if (arr[r - 1] != arr[l]) str += '-' + arr[r - 1];
  res.push(str);
  return res;
}

console.log(setArr(arr));
