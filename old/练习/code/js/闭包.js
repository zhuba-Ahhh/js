function fn() {
  let cnt = 1;

  function fn2() {
    console.log(cnt++);
  }
  return fn2;
}

// 闭包形成条件：返回的是一个函数，并且这个函数对局部变量存在引用，维持变量的存在
let fun = fn();
console.log(fun); // [Function: fn2]
fun(); // 执行结果就是闭包
fun();
let fun1 = fn();
fun1();
