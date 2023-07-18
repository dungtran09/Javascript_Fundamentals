const fruits = new Map();

fruits.set('Apple', 5);
fruits.set('Cheery', 10);
fruits.set('Lemon', 7);
fruits.set('Banana', 9);

console.log(fruits);


const copyFruits = [...fruits, ['Mango', 3]];

console.log(copyFruits);
