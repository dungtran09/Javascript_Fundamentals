const fruits = new Set();

fruits.add('apple');
fruits.add('lemon');
fruits.add('orange');
fruits.add('cherry');
fruits.add('banana');

for (const fruit of fruits) {
    console.log(fruit);
}

const arrNums = new Set([10, 20, 30]);
arrNums.add([11, 22, 33]);
arrNums.add([44, 55, 66, 77]);
arrNums.add([88, 99]);

for (const num of arrNums) {
    console.log(num);
}
