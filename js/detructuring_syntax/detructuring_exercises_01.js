const snacks = {
    chips: {name: 'PINGLES', salty: true},
    candy: {name: 'TWIZZLERS', salty : false},
    chocolate: {name: 'MARS', salty: false},
};
console.log(snacks);

const { candy, fruit = {name: 'banana', salty: false} } = snacks;
console.log(candy);
console.log(fruit);
