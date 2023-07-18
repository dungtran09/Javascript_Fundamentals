const store = {
  name: "Ifself Store",
  stock: [
    { name: "candy", quantity: 100 },
    { name: "fruit", quantity: 7 },
    { name: "toys", quantity: 23 },
  ],
};

console.log(store);

const myStore = {};
myStore.name = "My Store";
myStore.__proto__ = store;

const yourStore = {};
yourStore.name = "Your Store";
yourStore.__proto__ = store;

myStore.__proto__.stock[1].quantity = 300;

console.log(store.stock);
console.log(myStore.__proto__.stock);
console.log(yourStore.__proto__.stock);
