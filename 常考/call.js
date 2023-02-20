Function.prototype.MyCall = function (thisArg, ...args) {
  let fn = this //this指的是当前函数
  thisArg = (thisArg === undefined || thisArg === null) ? window : Object(thisArg)
  thisArg.fn = fn
  args = args || [] //如果arg不存在，就将其设置为[],方便结构
  let res = thisArg.fn(...args)
  delete thisArg.fn //执行完之后就删除该对象上的属性
  return res
}

Function.prototype.MyApply = function (obj, arg) {
  let fn = this //this表示函数
  // 如果要是obj为undefined或者null时，设置其为window,
  // 如果是基本数据类型，则将其设置为对象类型
  let thisArg = (obj === undefined || obj === null) ? window : Object(obj)
  thisArg.fn = fn
  arg = arg || [] //如果arg不存在，则直接赋值为[]
  let res = thisArg.fn(...arg)
  delete thisArg.fn
  return res
}

Function.prototype.MyBind = function (obj, ...args1) {
  let fn = this
  let thisArg = (obj === undefined || obj === null) ? window : Object(obj)

  return function (...args2) {
    thisArg.fn = fn
    let args = [...args1, ...args2]
    let result = thisArg.fn(...args)
    delete thisArg.fn
    return result
  }
}


const obj = {
  name: "caicai",
  age: 19
}

function add(a, b) {
  return a + b;
}

add.mycall = (obj)

Function.prototype.mycall = function (context, ...arg) {

  context = context || window // 当context为 undefined 或 null 时返回 window。

  arg = arg ? arg : [] // 特判数组是否为空。
  const key = Symbol() // 生成一个 不会发生冲突的索引。

  context[key] = this
  // 这里的 this 即 调用者 add 函数。
  // 相当于把 add 函数 挂载到 context 对象的一个属性当中。
  // context.fn = this

  const res = context[key](...arg)
  // 调用 挂载到 context 对象当中的 add 函数。
  // 所以实际调用者是 context ，此时的 this 也指向了 context 对象。

  delete context[key]
  // 任务完成，删除属性，避免造成污染。
  return res
}