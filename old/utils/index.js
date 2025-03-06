function isSpreadable(obj) {
  return (
    typeof obj === "object" &&
    obj !== null &&
    typeof obj[Symbol.iterator] === "function"
  );
}

const arr = [1, 2, 3];
const obj = { a: 1, b: 2 };
const str = "hello";
console.log({ ...obj });

console.log(isSpreadable(arr)); // true
console.log(isSpreadable(obj)); // false
console.log(isSpreadable(str)); // false
