// map的做法;

var findRepeatNumber = function (nums) {
  let map = new Map();
  for (const item of nums) {
    if (map.has(item)) return item;
    map.set(item);
  }
};

// set的做法也可以;
var findRepeatNumber = function (nums) {
  let set = new Set();
  for (const item of nums) {
    if (set.has(item)) return item;
    set.add(item);
  }
};
