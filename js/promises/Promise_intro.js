const myPromise = new Promise((resolve, reject) => {
    setTimeout(() => {
        console.log("Checking your cream in the store....!");
        resolve('Here is your cream!');
        // reject('Sorry! No ice cream for you!');
    }, 2000);
});

myPromise
.then((resolved) => {
    console.log(resolved);
    console.log(myPromise);
    return 'Get cream and go to home!';
})
.then((anotherResolved) => {
    console.log(anotherResolved);
})
.catch((error) => {
    console.log(error); 
    console.log(myPromise);
});


console.log('Hello...');
console.log(myPromise);

