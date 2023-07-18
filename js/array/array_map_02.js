const numbers = [25, 26, 27, 28, 29, 30];
console.log(numbers);

const listSquareNumbers = numbers.map((number) => {
    return squareNumber(number);
});

function squareNumber(number) {
    return number * number;
};

console.log(listSquareNumbers);
