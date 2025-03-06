const banji = {
  name: "终极一班",
  stus: ["xiaoming", "xiaoning", "xiaotian", "knight"],
  [Symbol.iterator]() {
    let index = 0;
    let _this = this;
    return {
      next: function () {
        if (index < _this.stus.length) {
          return {
            value: _this.stus[index++],
            done: false,
          };
        } else {
          return {
            value: undefined,
            done: true,
          };
        }
      },
    };
  },
};

for (let i of banji) {
  console.log(i);
}

console.log(banji);
