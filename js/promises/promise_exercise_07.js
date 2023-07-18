const fetchFast = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve('Fast Done!');
        }, 2000);
    });
};


const fetchSlow = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve('Slow Done!');
        }, 6000);
    });
};

console.log('Started Program.');

const showAllFetch = async () => {
    const fetchFastResult = fetchFast();
    const fetchSlowResult = fetchSlow();
    
    const result = await Promise.all([fetchFastResult, fetchSlowResult]);

    console.log(result[0]);
    console.log(result[1]);

};

showAllFetch();

console.log('Continue excute remainder....');
