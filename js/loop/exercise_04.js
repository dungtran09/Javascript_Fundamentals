const backpack = new Map();

backpack.set(1, {name: 'sword', value: 300});
backpack.set(2, {name: 'banana', value: 5});
backpack.set(3, {name: 'gold nugget', value: 10000});
backpack.set(4, {name: 'pants', value: 100});

// console.log(backpack);
let count = 0;
for (const [key, item] of backpack) {
    console.log(`${item.name}: $${item.value}`);
    count = key;
}
console.log('------------')
console.log(`Total items: ${count}`);
