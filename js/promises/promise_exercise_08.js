const goGetCandies = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log('Get candies from the database...');
            resolve({candy: 'sour keys',quantity: 5});
        }, 2000);
    });
};

const sellCandies = (candies) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log(`Calculate candy costs of candies...`);
            resolve(candies.quantity * 25);
        }, 3000);
    });
};


console.log('Started program!');

// solution 1
const showCostOfCandies1 = goGetCandies();
showCostOfCandies1.then((resolve, reject) => {
    const caculateCost = sellCandies(resolve);
    caculateCost.then((resolve, reject) => {
        const result = resolve;
        console.log(result);
    });
})

// solution 2
const showCostOfCandies2 = async () => {
    const candies = await goGetCandies();
    const cost = await sellCandies(candies);
    console.log(`The candies cost is: ${cost}`);
};
showCostOfCandies2();

console.log('Continue progress remainder...');


