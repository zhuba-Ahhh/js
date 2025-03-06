function getType(data) {
  if (data === null) return 'null'; // Null
  if (typeof data !== 'object') return typeof data; // Number Boolean Symbol String
  if (data.constructor === Array) return 'array'; // Array
  if (data instanceof Date) return 'date'; // Date
  if (data instanceof Map) return 'map'; // Map
  if (data instanceof Set) return 'set'; // Set
  if (data instanceof RegExp) return 'regexp'; // RegExp
  return 'object';
}

// 示例
const testArr = [
  's',
  0,
  false,
  undefined,
  Symbol(),
  function () {},
  123n,
  null,
  {},
  [],
  new Date(),
  new Map(),
  new Set(),
  /a/,
];
const result = testArr.map(item => getType(item));
console.log('得到的结果：', result);
/*
得到的结果：
[
    'string',  'number',
    'boolean', 'undefined',
    'symbol',  'function',
    'bigint',  'null',
    'object',  'array',
    'date',    'map',
    'set',     'regExp'
  ]
*/
