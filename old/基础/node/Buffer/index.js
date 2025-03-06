// 将字符串放置到缓冲区 注意此处不能放数字类型
let b = Buffer.from("颜");
let b1 = Buffer.from("10");
console.log(b, b.toString()); // => <Buffer e9 a2 9c> 颜
console.log(b1, b1.toString()); // => <Buffer 31 30> 10

// 初始化缓冲区 创建一个大小为10字节的缓冲区
// 保证新创建的缓冲区数据是不会包含旧的数据
let b2 = Buffer.alloc(10);
console.log(b2); // => <Buffer 00 00 00 00 00 00 00 00 00 00>

// 不会重置数据，不太安全，谨慎使用
let b3 = Buffer.allocUnsafe(10);
console.log(b3);
b3[0] = "1";
console.log(b3, b3[0].toString());
