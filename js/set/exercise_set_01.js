const listNumbers = new Set();

listNumbers.add(1);
listNumbers.add(2);
listNumbers.add(3);
listNumbers.add(4);
listNumbers.add(3);
listNumbers.add(4);
listNumbers.add(5);

console.log(listNumbers);


const listNumbersWithArray = new Set([1, 2, 3, 3]);

listNumbersWithArray.add([1, 2, 3]);
listNumbersWithArray.add([4, 5, 6]);
listNumbersWithArray.add([7, 8, 8]);
listNumbersWithArray.add([1, 2, 3]);

console.log(listNumbersWithArray);
