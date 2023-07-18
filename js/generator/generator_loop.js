const counter = function* () {
    yield 10
    yield* 'Hello';
    yield* [1, 2, 3];
    yield false;
};

const counterGenerator = counter();

for (const count of counterGenerator) {
    console.log(count);
}

// let counterObject = counterGenerator.next();
//
// while (counterObject.done === false) {
//     console.log(counterObject.value);
//     counterObject = counterGenerator.next();
// }
