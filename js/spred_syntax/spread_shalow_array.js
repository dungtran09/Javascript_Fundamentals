const listNums = [[1, 2, 3], [4, 5, 6], [7, 8, 9]];
console.log(listNums);

const listNumsCopy = [...listNums];
console.log(listNumsCopy);

listNums[0].pop();

console.log(listNums);
console.log(listNumsCopy);


