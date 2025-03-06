const _flat = (arr, n) => {
	if (n < 1) return arr;

	const res = [];
	for (let item of arr) {
		if (Array.isArray(item)) {
			res.push(..._flat(item, n - 1));
		} else {
			res.push(item);
		}
	}

	return res;
}

//-------------------------
const compare = (arr1, arr2) => {
	return arr1.filter((item) => arr2.includes(item))
}

//-------------------------
/**
 * 
 */
class LRUCache {
	constructor(capacity) {
		this.map = new Map();
		this.capacity = capacity;
	}
	get(key) {
		if (this.map.has(key)) {
			let value = this.map.get(key);
			this.map.delete(key);
			return value;
		}

		return -1;
	}
	put(key, value) {
		if (this.map.has(key)) this.map.delete(key);
		this.map.set(key, value);
		if (this.map.size > this.capacity) this.map.delete(this.map.keys().next().value);
	}
}
