const items = ['apple', 'babana', 'cherry', 'orange'];
console.log(items);

const concatItems = items.reduce((prevItem, currItem) => {
    return prevItem.concat(currItem.toUpperCase().trimEnd(), ' ');
}, '');

console.log(concatItems);

console.log(concatItems.trimEnd().split(' '));
