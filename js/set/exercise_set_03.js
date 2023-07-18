const items = [
    {name: 'banana', quantity: 1, price: 1.95},
    {name: 'apple', quantity: 1, price: 1.45},
    {name: 'banana', quantity: 1, price: 1.95},
    {name: 'candy', quantity: 1, price: 3.50},
];

const result = [];

console.log(items);

console.log('------Solution 1------');

for (let index = 0; index < items.length; index++) {
    if (result.length == 0) {
        result.push(items[index]);
    } else {
        if (!isDuplicated(items[index].name)) {
            result.push(items[index]);
        }
    };
    
}

function isDuplicated(itemName) {
    for (let index = 0; index < result.length; index++) {
        if (items[index].name === itemName) {
            return true; 
        } else {
            return false;
        }
        
    }
}

console.log(result);


console.log('------Solution 2------');

const result2 = [];
const uniqueNameItems = new Set();

for (const item of items) {
    if (uniqueNameItems.has(item.name)) {
        continue;
    }
    result2.push(item);
    uniqueNameItems.add(item.name);
}

console.log(result2);
