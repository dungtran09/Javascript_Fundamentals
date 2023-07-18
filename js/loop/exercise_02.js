const ages = [10, 42, 15, 22, 11, 74, 39, 20];

const result = [];

for (const age of ages) {
    result.push({age: age, name: `Dragon_${age}`});
};

console.log(result);
