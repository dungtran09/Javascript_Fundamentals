const makeTimeout = ((ms) => {
    const timeout = new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve('All Done!');
        }, ms);
    });
    return timeout;
});

console.log('Program started');

const fetchData = async () => {
    console.log('Fetching first of set data...');
    const rs1 = makeTimeout(2000);
    console.log('Fetching second of set data...', rs1);
    const rs2 = makeTimeout(2000);
    const finalRs = await Promise.all([rs1, rs2]);
    console.log('Done fetching data! ', finalRs);
}

fetchData();

console.log('Program completed');
