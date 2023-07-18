console.log('Program stated.');

const resolvedPromise = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve();
    }, 3000);
});

console.log('Program in progress....');

resolvedPromise
.then(() => {
    console.log('Step 1 completed.');
    return new Promise((resolve, reject) => {
            setTimeout(() => {
                resolve();
            }, 3000);
        });
})
.then(() => {
    console.log(('Step 2 completed.'));
});
