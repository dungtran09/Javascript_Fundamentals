const generator = function* () {
    yield new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve('Hi, How are you?');
        }, 2000);
    });

    yield new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve('Yes, i am!');
        }, 4000);
    });
};

const generatorObject = generator();

// console.log(generator.toString());
// console.log(generatorObject);

// generatorObject.next().value.then((result) => {
//     console.log(result);
// });


for (const promise of generatorObject) {
    const getResult = async () => {
        const msg = await promise;
        console.log(msg);
    }
    getResult();
}
