// 'a_b_c' => 'ABC'
let str = 'abc_bcs_abd';

let change = function (str) {
  let arr = str.split("_");
  console.log(arr);

  // arr.forEach(item => {
  //   item.toUpperCase()
  //   console.log(item);
  // });
  for (let i = 0; i < arr.length; i++) {
    arr[i].toUpperCase();
  }

  return arr.join("");
}

console.log(change(str));


