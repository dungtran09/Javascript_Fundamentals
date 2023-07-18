const nums = [10, 30 ,50, 70, 90];
console.log(nums);

const squaresAndSumNums = nums.map((num) => {
    return Math.pow(num, 2);
}).filter((num) => {
    return num > 1000 ? true : false;
}).reduce((prevNum, currNum) => {
    return prevNum + currNum;
}, 0);

console.log(squaresAndSumNums);


