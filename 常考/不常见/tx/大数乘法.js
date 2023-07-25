/**
 *
 * 大数乘法
 * @param {*} num1
 * @param {*} num2
 * @return {*} string
 */
const multiply = (num1, num2) => {
    if (num1 === '0' || num2 === '0') return '0';
    const l1 = num1.length, l2 = num2.length;
    const store = new Array(l1 + l2 - 1).fill(0);
    for (let i = 0; i < l1; i++) {
        for (let j = 0; j < l2; j++) {
            store[i + j] += num1[i] * num2[j];
        }
    }

    let res = '', l = store.length, curry = 0;
    while (l--) {
        curry += store[l];
        res = curry % 10 + res;
        curry = curry / 10 | 0;
    }

    return curry > 0 ? curry + res : res;
};

console.log(multiply('1111332', '33333333333'));