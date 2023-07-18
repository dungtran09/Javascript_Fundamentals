const nums = [5, 10, 15, 20 ,25, 30];
console.log(nums);

const reduced = nums.reduce((result, num) => {
    result.push(num + 5);
    return result;
    
}, []);

console.log(reduced);

