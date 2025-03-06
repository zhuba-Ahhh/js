function _new(fn, ...args) {
	let obj = Object.create(fn.prototype);
	let result = fn.apply(obj, ...args);
	return result instanceof Object ? result : obj;
}

function quickSort(arr) {
	if (arr.length < 2) return arr;
	const left = [],
		right = [],
		cur = arr.splice(0, 1);
	for (let item of arr) {
		item > cur ? right.push(item) : left.push(item);
	}

	return quickSort(left).concat(cur, quickSort(right));
}
