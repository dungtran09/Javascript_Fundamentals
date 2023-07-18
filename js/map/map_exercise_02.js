const numbers = [0, 11, 99, 22, 77, 33, 44, 55, 66, 77, 88, 22, 99];

const seeNumbers = new Map();

for (let i = 0; i < numbers.length; i++) {
    if (seeNumbers.has(numbers[i])) {
        console.log(i, seeNumbers.get(numbers[i]));
    } else {
        seeNumbers.set(numbers[i], i);
    }
}

console.log(seeNumbers);


