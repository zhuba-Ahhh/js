const myFlat = (arr, n) => {
  if (n < 1) return arr;

  const res = [];
  const res1 = arr.reduce((item) =>
    Array.isArray(item) ? myFlat(item, n - 1) : item
  )
  for (let item of arr) {
    if (Array.isArray(item)) {
      res.push(...myFlat(item, n - 1));
    } else {
      res.push(item);
    }
  }

  return res;
}

const test1 = [1, [2, 3, [34, 5],
    [1]
  ],
  [1],
  [22, [3, 4, [5]]]
];

console.log(test1);
console.log(myFlat(test1, 0));