function change(obj) {
  return Object.keys(obj)
    .map((key) => `${encodeURIComponent(key)}=${encodeURIComponent(obj[key])}`)
    .join("&");
}

const testObj = { name: "John Doe", age: 30 };

console.log(change(testObj));
