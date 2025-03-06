let findClosest = (words, word1, word2) => {
    const length = words.length;
    let ans = length;
    let index1 = -1;
    let index2 = -1;

    for (let i = 0; i < length; i++) {
        const word = words[i];
        if (word === word1) {
            index1 = i;
        }
        if (word === word2) {
            index2 = i;
        }
        if (index1 >= 0 && index2 >= 0) {
            ans = Math.min(ans, Math.abs(index1 - index2));
            if (ans === 1) {
                return ans;
            }
        }
    }
    return ans;
};


const words = ["I", "am", "a", "student", "from", "a", "university", "in", "a", "city"], word1 = "a", word2 = "student";
console.log(findClosest(words, word1, word2));