function Person(name, age) {
  this.name = name;
  this.age = age;
}

Person.prototype.running = function () {
  console.log("我会跑");
};

function Student(name, age, Number) {
  Person.call(this, name, age);
  this.Number = Number;
}

inheritPrototype(Student, Person);

function inheritPrototype(children, parent) {
  children.prototype = Object.create(parent.prototype);
  Object.defineProperty(children.prototype, "constructor", {
    value: children,
    enumerable: false,
    configurable: true,
    writable: true,
  });
}

var stu1 = new Student("hdf", 20, 123456);
console.log(stu1);
stu1.running();
