const store = new Map();

store.set('Cups', 46);
store.set('Candles', 121);
store.set('Vases', 15);
console.log(store);

for (const item of store) {
    const [key, value] = item;
    console.log(key, '=>', value);
}

console.log('---------')

for (const [key, value] of store) {
    console.log(key,':', value);
}
