function quickSort(arr) {
    if (arr.length <= 1) {
        return arr;
    }
    const left = [],
        right = [],
        current = arr.splice(0, 1);
    for (const item of arr) {
        // item > current ? right.push(item) : left.push(item);
        if (item > current) {
            right.push(item);
        } else {
            left.push(item);
        }
    }
    return quickSort(left).concat(current, quickSort(right));
}

function qk(arr) {
    if (arr.length <= 1) return arr;
    const left = [],
        right = [],
        cur = arr.splice(0, 1);
    // console.log(cur);
    for (const item of arr) item > cur ? right.push(item) : left.push(item);
    return qk(left).concat(cur, qk(right));
}

const arr = [1, 2, 5, 6, 3, 4, 6, 7, 8, 2, 4, 8, 9, 0, 6, 5, 4, 6, 7, 9, 9],
    arr1 = [1, 2, 5, 6, 3, 4, 6, 7, 8, 2, 4, 8, 9, 0, 6, 5, 4, 6, 7, 9, 9];
const A = new Array(100000).fill(1);
let A1 = A.map(item => item = Math.random() * 10),
    A2 = A.map(item => item = Math.random() * 10);


let d = Date.now();
quickSort(A1);
let d1 = Date.now();
qk(A2);
console.log(d1 - d, Date.now() - d1);


function q(arr) {
    if (arr < 2) return arr;
    const left = [],
        right = [],
        cur = arr.splice(0, 1);
    for (let item of arr) item > cur ? right.push(item) : left.push(item);
    return q(left).concat(cur, q(right));
}