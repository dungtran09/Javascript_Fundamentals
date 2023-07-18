const counter = function* () {
    yield 10
    yield 'Hello';
    yield [1, 2, 3];
    yield {name: 'Doe John', age: 29};
    yield false;
};

const counterGenerator = counter();

console.log(counterGenerator.next());
console.log(counterGenerator.next());
console.log(counterGenerator.next());
console.log(counterGenerator.next());
console.log(counterGenerator.next());
console.log(counterGenerator.next());

