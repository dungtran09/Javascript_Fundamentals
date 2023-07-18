let numbers = [10, 20, 15, 30, 15, 20, 35, 60, 10];

let uniqueNumbers = new Set();

let countDuplicated = 0;
for (const number of numbers) {
    if (uniqueNumbers.has(number)) {
        countDuplicated++;
        console.log(`The number duplicated in array is: ${number}`);

    } else {
        uniqueNumbers.add(number);
    }
}

console.log('Total: ' + countDuplicated);
console.log(uniqueNumbers);

