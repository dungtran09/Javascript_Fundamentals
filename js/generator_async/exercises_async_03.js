const randomFastAndSlow = async function* () {
    while (true) {
        let randomNumber = Math.floor(Math.random() * 2) + 1;
        if (randomNumber === 1) {
            console.log('Status: Fast. Loanding...');
            yield new Promise((resolve, reject) => {
                setTimeout(() => {
                    resolve('Fast!');
                }, 500);
            });
        } else {
            console.log('Status: Slow. Loading...');
            yield new Promise((resolve, reject) => {
                setTimeout(() => {
                    resolve('Slow!');
                }, 3000);
            });
        }
    }
};

const createRandomFastAndSlowObject = randomFastAndSlow();

const showRandomFastAndSlow = async () => {
    for await (const promiseRandom of createRandomFastAndSlowObject) {
        console.log(promiseRandom);
    }
}

showRandomFastAndSlow();
