function cumulative(min = 1, max = 100) {
  let sum = 0;
  for (let i = min; i <= max; i++) sum += i;
  return sum;
}


console.log(cumulative());
console.log(cumulative(1, 10));