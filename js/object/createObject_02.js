const banaba = {name: 'Banana', quantity: 1, price: 1.95};
const apple = {name: 'Apple', quantity: 1, price: 1.45};
const candy = {name: 'Candy', quantity: 1, price: 3.5};

const store = {
    storeNumber: 5,
    localtionCity: 'Ha Noi',
    locationCountry: 'Viet Nam',
    products: [banaba, apple, candy],
};

// console.log(store);

for (let index in store.products) {
    console.log(store.products[index]);
}

store.products[0].price = 2.95;

console.log(store);
