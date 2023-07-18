const randomNumber = async function* () {
    while (true) {
        yield new Promise((resolve, reject) => {
            setTimeout(() => {
                resolve(Math.floor(Math.random() * 9));
            }, 1000);
        });
    }
};

const randomNumberObject = randomNumber();

const showRandomNumber = async () => {
    for await (const number of randomNumberObject) {
        console.log(number);
    }
};

showRandomNumber();
