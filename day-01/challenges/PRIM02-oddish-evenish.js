function oddishOrEvenish(number) {
  number = number
    .toString()
    .split('')
    .map(num => {return Number(num);})
    .reduce((a, b) => {return a + b;});
  return number % 2 === 0 ? 'Evenish' : 'Oddish';
}

console.log(oddishOrEvenish(2445));
console.log(oddishOrEvenish(123));
