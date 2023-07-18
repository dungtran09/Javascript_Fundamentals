console.log('Program started!');

const progressTask = new Promise((resolve, reject) => {
    setTimeout(() => {
        // resolve();
        reject();
    }, 2000);

});


console.log('Program in progress ...');

progressTask
.then(() => {
    console.log('Program completed succsessfully!');
})
.catch(() => {
    console.log('Program failed!');
});
