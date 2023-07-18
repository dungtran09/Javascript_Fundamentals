const listNumbers = [10, 20, 30];
const numbers = [40, 50, 60];

listNumbers.push.apply(listNumbers, numbers);

console.log(listNumbers);
