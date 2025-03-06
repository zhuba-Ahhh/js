// 1

let result1 =
  100 + true + 21.2 + null + undefined + 'Tencent' + [] + null + 9 + false;
console.log(result1);

// NaNTencentnull9false

// 2

let a = '?';
if (a == 1 && a == 2 && a == 3) {
  console.log('OK');
}

/*
let a = {
num: 0,
    toString: function () {
        return this.num += 1;
    }
};
*/

// 3

let arr = [27.2, 0, '0013', '14px', 123];
result3 = arr.map(parseInt);
console.log(result3);
