const nums = [10, 20, 30, 40, 50];
console.log(nums);

const timesTwo = nums.map(num => num * 2).filter(num => num > 50 ? true : false);

console.log(timesTwo);
