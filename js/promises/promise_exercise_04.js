console.log('Program started');

const myPromise = new Promise((resolve, reject) => {
    setTimeout(() =>{
        resolve();
    }, 5000);
});

console.log('Program in progress....');

myPromise
.then(() => {
    console.log(
            {message: 'hello, friend!', sender: 'Cheir DS'},
        ); 
    return new Promise((resolve, reject) => {
            setTimeout(() =>{
                resolve();
            }, 2000);
        })
})
.then(() => {
    console.log('First promise chain completed!');
});

myPromise
.then(() => {
    console.log(
            {message: 'hello, friend!', sender: 'Cheir DS'},
        ); 
    return new Promise((resolve, reject) => {
            setTimeout(() =>{
                resolve();
            }, 10000);
        })
})
.then(() => {
    console.log('Second promise chain completed!');
});
