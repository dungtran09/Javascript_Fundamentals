const banana = {
    name: 'Banana',
    quantity: 1,
    price: 1.85,
};

const cherry = {
    name: 'Cherry',
    quantity: 1,
    price: 2.85,
};

const apple = {
    name: 'Apple',
    quantity: 1,
    price: 4.85,
};

const store = new Map([
    ['storeNumber', 5], 
    ['locationCity', 'Ha Noi'],
    ['locationCountry', 'Viet Nam'],
    ['products', [banana, cherry, apple]],
]);

console.log(store);

for (const key of store.get('products')) {
    console.log(key);
}

console.log('--------------')


store.get('products')[0].price = 1.75;
console.log(store.get('products')[0]);

store.get('products')[2].price = 4.99;
console.log(store.get('products')[2]);
