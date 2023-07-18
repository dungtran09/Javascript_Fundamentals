
let min = 0, max = 10;

const ranDomNumbers = function* () {
    while (min < max) {
        yield Math.random().toFixed(2);
        min++;
    }
};

const random = ranDomNumbers();

for (const number of random) {
    console.log(number);
}
