/**
 * 深浅拷贝实现
 * 包含多种实现方式和性能分析
 */

// 浅拷贝实现
export function shallowCopy<T>(target: T): T {
  if (typeof target !== 'object' || target === null) {
    return target;
  }

  const result = Array.isArray(target) ? [] : {};
  for (const key in target) {
    if (Object.prototype.hasOwnProperty.call(target, key)) {
      (result as any)[key] = target[key];
    }
  }
  return result as T;
}

// 深拷贝 - 递归实现
export function deepCopyRecursive<T>(target: T, map = new WeakMap()): T {
  if (typeof target !== 'object' || target === null) {
    return target;
  }

  // 处理循环引用
  if (map.has(target)) {
    return map.get(target);
  }

  const result = Array.isArray(target) ? [] : {};
  map.set(target, result);

  for (const key in target) {
    if (Object.prototype.hasOwnProperty.call(target, key)) {
      (result as any)[key] = deepCopyRecursive(target[key], map);
    }
  }

  return result as T;
}

// 深拷贝 - 迭代实现
export function deepCopyIterative<T>(target: T): T {
  if (typeof target !== 'object' || target === null) {
    return target;
  }

  const map = new WeakMap();
  const stack: Array<[any, any]> = [[target, Array.isArray(target) ? [] : {}]];
  const result = stack[0][1];

  while (stack.length) {
    const [current, copy] = stack.pop()!;

    // 处理循环引用
    if (map.has(current)) {
      continue;
    }
    map.set(current, copy);

    for (const key in current) {
      if (Object.prototype.hasOwnProperty.call(current, key)) {
        const value = current[key];
        if (typeof value === 'object' && value !== null) {
          const newCopy = Array.isArray(value) ? [] : {};
          copy[key] = newCopy;
          stack.push([value, newCopy]);
        } else {
          copy[key] = value;
        }
      }
    }
  }

  return result as T;
}

// JSON序列化方式（仅作为参考，不推荐在生产环境使用）
export function deepCopyJSON<T>(target: T): T {
  return JSON.parse(JSON.stringify(target));
}
