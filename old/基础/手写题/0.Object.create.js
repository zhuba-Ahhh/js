// function create(obj) {
//   function F() {}
//   F.prototype = obj;
//   return new F();
// }

// console.log(Object.prototype.toString.call("str"));
// console.log(void 0);

var obj = {
  name: "hdf",
  age: 18,
};

for (const [key, value] of Object.entries(obj)) {
  console.log(key, value);
}
