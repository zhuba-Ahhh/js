/**
 *
 * 根据id合并并排序两个数组
 * @param {*} arr1
 * @param {*} arr2
 * @return {*}
 */
const join = (arr1, arr2) => {
    const mp = new Map();
    arr1.forEach(obj => mp.set(obj.id, obj));
    arr2.forEach(obj => mp.set(obj.id, { ...(mp.get(obj.id) || {}), ...obj }));
    return [...mp.values()].sort((a, b) => a.id - b.id);
};

console.log(join([{"id": 1,"x": 2,"y": 3},{"id": 2,"x": 3,"y": 6}],[{"id": 2,"x": 10,"y": 20},{"id": 3,"x": 0,"y": 0}]))