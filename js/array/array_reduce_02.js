const animals = ['dog', 'cat', 'koala', 'monkey'];
console.log(animals);

const concatAnimals = animals.reduce((result, animal) => {
    return result + animal.toUpperCase().concat(' - ');
}, '');

console.log(concatAnimals.substring(0, concatAnimals.length - 2));

