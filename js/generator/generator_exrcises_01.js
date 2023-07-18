let index = 1;

const countOneToTen = function* () {
    while (index <= 10) {
        yield index++;
    };
};

const count = countOneToTen();

for (const number of count) {
    console.log(number);
}
