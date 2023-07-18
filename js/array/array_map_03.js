
const items = ['light', 'banana', 'phone', 'book', 'mouse'];
console.log(items);

const plurals = items.map((item) => {
    if (item === 'mouse') {
        return 'mice';
    }
    return item.concat('s');
});

console.log(plurals);
