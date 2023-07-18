let start = 0, end = 5;
let min = 1, max = 10;

const getRandomNumbers = function* () {
    while (start < end) {
        yield Math.floor((Math.random() * max) + min);
        start++;
    }

};

const getRandomItemsFromGrocery = function* () {
    const items = ['Avacado', 'Cookie', 'Milk', 'Soup', 'Soda'];
    let index = 0;
    while (index < items.length) {
        yield items[Math.floor(Math.random() * items.length)];
        index++;
    }
};

const randomNumbers = getRandomNumbers();
const randomItemsFromGrocery = getRandomItemsFromGrocery();

let number = randomNumbers.next();
let item = randomItemsFromGrocery.next();

// for (const number of randomNumbers) {
//     console.log(number);
// }
//
// for (const item of randomItemsFromGrocery) {
//     console.log(item);
// }
let index = 0;

while (index < 5) {
    if (number.done === false || item.done === false) {
        console.log(number.value,':', item.value);
    }
    number = randomNumbers.next();
    item = randomItemsFromGrocery.next();
    index++;
}
