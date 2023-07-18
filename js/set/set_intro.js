const listNumbers = new Set();

listNumbers.add(1);
listNumbers.add(2);
listNumbers.add(3);
listNumbers.add(4);
listNumbers.add(null);
listNumbers.add(undefined);
listNumbers.add([1, 3, 4]);
listNumbers.add([1, 3, 4]);
const person = {
    name: 'Doe John',
    age: 27,
}

const personCopy = person;

listNumbers.add(person);
listNumbers.add(personCopy);

console.log(listNumbers);

console.log('Size of set: ' + listNumbers.size);

console.log(listNumbers.has(person));
console.log(listNumbers.has(1));
console.log(listNumbers.has(10));
