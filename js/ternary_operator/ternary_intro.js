const numbers = [10, 15, 20, 35, 30, 5, 40];
console.log(numbers.join(' '));

const overAndUnder = numbers.map((number) => number > 20 ? 'Over' : 'Under');
console.log(overAndUnder.join(' '));
