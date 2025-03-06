/**
 * 最近最少使用
 * @param {number} capacity
 */
let LRUCache = function (capacity) {
  this.map = new Map();
  this.capacity = capacity;
};

/**
 * 存在就返回其值并放到最前面
 * @param {number} key
 * @return {number}
 */
LRUCache.prototype.get = function (key) {
  if (this.map.has(key)) {
    let value = this.map.get(key);
    // map 后设置 先出 所以先删除再重新设置
    this.map.delete(key);
    this.map.set(key, value);
    return value;
  }

  return -1;
};

/**
 * 重新设置 如果长度超出就去除最久未使用
 * 先还是利用map 设置值并放置到最新
 * 判断是否超出， 超出就删除最久的
 * @param {number} key
 * @param {number} value
 * @return {void}
 */
LRUCache.prototype.put = function (key, value) {
  if (this.map.has(key)) this.map.delete(key);
  this.map.set(key, value);
  if (this.map.size > this.capacity)
    this.map.delete(this.map.keys().next().value);
};

class LRUCache1 {
  constructor(capacity) {
    this.map = new Map();
    this.capacity = capacity;
  }
  /**
   * 存在就返回其值并放到最前面
   * @param {number} key
   * @return {number}
   */
  get(key) {
    if (this.map.has(key)) {
      let value = this.map.get(key);
      // map 后设置 先出 所以先删除再重新设置
      this.map.delete(key);
      this.map.set(key, value);
      return value;
    }

    return -1;
  }
  /**
   * 重新设置 如果长度超出就去除最久未使用
   * 先还是利用map 设置值并放置到最新
   * 判断是否超出， 超出就删除最久的
   * @param {number} key
   * @param {number} value
   * @return {void}
   */
  put(key, value) {
    if (this.map.has(key)) this.map.delete(key);
    this.map.set(key, value);
    if (this.map.size > this.capacity)
      this.map.delete(this.map.keys().next().value);
  }
}
// var obj = new LRUCache(capacity)
// var param_1 = obj.get(key)
// obj.put(key,value)

let LRUCache1 = new LRUCache(2);
LRUCache1.put(1, 1); // 缓存是 {1=1}
LRUCache1.put(2, 2); // 缓存是 {1=1, 2=2}
LRUCache1.get(1); // 返回 1
LRUCache1.put(3, 3); // 该操作会使得关键字 2 作废，缓存是 {1=1, 3=3}
LRUCache1.get(2); // 返回 -1 (未找到)
LRUCache1.put(4, 4); // 该操作会使得关键字 1 作废，缓存是 {4=4, 3=3}
LRUCache1.get(1); // 返回 -1 (未找到)
LRUCache1.get(3); // 返回 3
LRUCache1.get(4); // 返回 4

class LRUCache2 {
  constructor(capacity) {
    this.cache = {};
    this.order = [];
    this.capacity = capacity;
  }

  get(key) {
    if (this.cache.hasOwnProperty(key)) {
      // 获取缓存后，更新缓存的顺序
      let index = this.order.indexOf(key);
      this.order.splice(index, 1);
      this.order.push(key);

      return this.cache[key];
    }

    return -1;
  }

  put(key, value) {
    if (this.cache.hasOwnProperty(key)) {
      // 如果缓存已存在，更新缓存的值和顺序
      let index = this.order.indexOf(key);
      this.order.splice(index, 1);
    } else if (this.order.length >= this.capacity) {
      // 如果缓存已满，删除最久未使用的缓存
      let oldestKey = this.order.shift();
      delete this.cache[oldestKey];
    }

    // 添加或更新缓存的值和顺序
    this.cache[key] = value;
    this.order.push(key);
  }
}
