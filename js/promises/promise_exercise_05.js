const p1 = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve(10);
    }, 3000);
});

p1.then(() => {
    console.log('The first number has resolved!');
})

const p2 = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve(20);
    }, 5000);
});

p2.then(() => {
    console.log('The second numbers has resolved!');
});

Promise.all([p1, p2]).then((numbers) => {
    const total = numbers.reduce((prevValue, currValue) => {
        return prevValue + currValue;
    });
    console.log(`Result of ${numbers[0]} + ${numbers[1]} = ${total}`);
});
