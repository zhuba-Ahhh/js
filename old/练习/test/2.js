function People(name) {
  this.name = name;
}

People.prototype.getName = function () {
  console.log(this.name);
};

let people = new People('Jan');
console.log(people.name);
people.getName();

function Student(name, age) {
  People.call(this, name);
  this.age = age;
}

let prototype = Object.create(People.prototype);
Student.prototype = prototype;
prototype.contructor = Student;

let XM = new Student('xiaoMing', '19');
console.log(XM.name, XM.age);
XM.getName();
