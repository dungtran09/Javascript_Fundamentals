const generatorTwiceTime = async function* (time) {
    while (true) {
        yield new Promise((resolve, reject) => {
            setTimeout(() => {
                resolve(time);
            }, time);
        });
        time += time;
    }
};

const createGeneratorTwiceTimeObject = generatorTwiceTime(100);

const showGereratorTwiceTime = async () => {
    for await (const time of createGeneratorTwiceTimeObject) {
        console.log(time);
    }
};

showGereratorTwiceTime();
