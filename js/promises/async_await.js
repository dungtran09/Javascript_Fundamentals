const makeTimeout = ((msg) => {
    const timeout = new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve('All Done.');
        }, msg);
    });
    return timeout;
});

console.log('Program started.');
makeTimeout(1000).then((result) => {
    console.log(`From .then func: ${result}`);
});

const fetchStuff = async () => {
    const result = await makeTimeout(1000);
    console.log(`From async func: ${result}`);
}

fetchStuff();

console.log('Program completed.');


