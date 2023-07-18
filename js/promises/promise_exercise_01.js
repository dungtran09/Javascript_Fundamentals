console.log('Program started...');

const myPromise = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve();
    }, 3000);
});

console.log('Program progress...');

myPromise.then(() => {
    console.log('Program complete succsessfully!');
});



