/**
 * @description interface 接口
 * @description type 类型别名
 */
interface IUser1 {
  id: number;
  name: string;
}
interface IUser2 {
  id: number;
  name: string;
  age: number;
}

interface IUser11 {
  id: number;
  name: string;
}
interface IUser22 extends IUser11 {
  age: number;
}
// IUser2 包含3个属性 // IUser1 包含2个属性 // 被继承的， 是属性少的

type Test = boolean | string;

/**
 * @description 联合类型
 */

function sayHello(person: string | string[]): string | string[] {
  if (typeof person === 'string') {
    return `Hello, ${person}`;
  }
  if (Array.isArray(person)) {
    return person.map(name => `Hello, ${name}`);
  }
  throw new Error('err');
}

// 字面量类型组成联合类型
type HttpMethod = 'Get' | 'Post' | 'Update' | 'Delete';
function request(method: HttpMethod) {
  console.log('method', method);
  // ...
}
// request('GET');  // 类型“"GET"”的参数不能赋给类型“HttpMethod”的参数。ts(2345)
request('Get');

/**
 * @description 交叉类型
 */

// 非对象类型的交叉运算
type N0 = string & number; // never
type N1 = any & 1; // any
type N2 = any & never; // never
// 对象类型的交叉运算
type A = { kind: 'a'; foo: string };
type B = { kind: 'b'; foo: number };
type C = { kind: 'c'; foo: number };
type D = { name: string };
type AB = A & B; // 因为A.kind 'a' 基本数据类型 B.kind 'b' 基本数据类型  'a' & 'b' >>> never
type BC = B & C; // never
type AD = A & D; // { kind: 'a'; foo: string; name: string;}
const ad: AD = { kind: 'a', foo: '', name: '' }; // 通过type A = { age: number; foo: string }; type D = { age: number; name: string; }; type AD = A & D; // {age: number; foo: string; name: string; } const ad: AD = {foo: '', name: '', age: 9};  // 通过 type A = { age: ''; foo: string }; type D = { age: '1'; name: string; }; type AD = A & D; const ad: AD = {foo: '', name: '', age: ''}; // 报错 不能 // 将类型“string”分配给类型“never”。ts(2322)
// interface D {
//   d: boolean;
// }
// interface E {
//   e: string;
// }
// interface A {
//   x: D;
// }
// interface B {
//   x: E;
// }
// type AB = A & B;
// const ab: AB = { x: { d: true, e: "" } };

type PartialByKeys<T, K extends keyof T> = { [P in K]?: T[P] } & Pick<
  T,
  Exclude<keyof T, K>
>;
type User = { id: number; name: string; age: number };
type U = PartialByKeys<User, 'id'>;
type U2 = Pick<User, 'id'>;
type U3 = Exclude<keyof User, 'id'>;

/**
 * @description keyof == Object.keys()
 */
