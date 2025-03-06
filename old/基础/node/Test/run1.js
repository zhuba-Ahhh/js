let result1 =
  100 + true + 21.2 + null + undefined + "Tencent" + [] + null + 9 + false;
console.log("T1：" + result1);

let a = {
  num: 0,
  toString: function () {
    return (this.num += 1);
  },
};
if (a == 1 && a == 2 && a == 3) {
  console.log("T2：" + "OK");
}

let arr = [27.2, 0, "0013", "14px", 123];
result3 = arr.map(parseInt);
console.log("T3：" + result3);
