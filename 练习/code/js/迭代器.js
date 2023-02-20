let arr = [1, 2, 3, 4];

let iterator = arr[Symbol.iterator]();
console.log(iterator.next());
console.log(iterator.next());
console.log(iterator.next());
console.log(iterator.next());
console.log(iterator.next());

// 实现
const Arr = {
    name: 'Arr',
    arr: [1, 2, 3, 4],
    [Symbol.iterator]() {
        const arr = this.arr,
            l = arr.length;;
        let index = 0;
        return {
            next: function () {
                if (index < l) return {
                    value: arr[index++],
                    done: false
                }
                return {
                    value: undefined,
                    done: true
                }
            }
        }
    }
}
// for (let i of Arr) {
//     console.log(i);
// }
console.log(Arr);

let iterator1 = Arr[Symbol.iterator]();
console.log(iterator1.next());
console.log(iterator1.next());
console.log(iterator1.next());
console.log(iterator1.next());
console.log(iterator1.next());