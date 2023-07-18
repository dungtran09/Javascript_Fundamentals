const makeTimeout = (ms) => {
    const timeout = new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve('All done successfully!');
            // reject('There are something wrong here...!');
        }, ms);
    });

    return timeout;
};



const causeError = async () => {
    try {
        const result = await makeTimeout(2000);
        console.log(result);
    } catch (e) {
        console.log(e);
    }
}

console.log('Started program...');
causeError();
console.log('Excute remainder...')

