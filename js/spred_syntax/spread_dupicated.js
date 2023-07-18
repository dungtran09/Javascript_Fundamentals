const animals = {
    dog: 25,
    cat: 9,
    monkey: 15,
};
console.log(animals);

const animalsCopy = {
    ...animals,
    monkey: 20,
};

console.log(animalsCopy);
