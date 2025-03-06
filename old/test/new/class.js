class Demo {
  constructor() {
    this.name = "demo";
    console.log(this.name);
  }

  getName() {
    console.log("111", this.name);
  }
}

Demo.prototype.getName = () => {
  console.log("222", this.name);
};

const demo = new Demo(); // demo
demo.getName(); // window: 222 undefined 浏览器: 222 ''(空串) 浏览器有name属性
