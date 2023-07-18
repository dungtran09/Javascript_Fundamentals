const asyncGenerator = async function* () {
    console.log('Waiting fetch data from databases....');
    yield new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve({
                name: 'Doe John',
                age: 27,
                address: {
                    country: 'USA',
                    capial: 'Washington DC',
                    street: null,
                },
                admin: true,

            });
        }, 3000);
    });

    yield new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve({
                name: 'Cherry DS ',
                age: 25,
                address: {
                    country: 'UK',
                    capial: 'London',
                    street: null,
                },
                admin: false,

            });
        }, 4000);
    });
}

const asyncGeneratorObject = asyncGenerator();

const fetchData = async () => {
    for await (const promise of asyncGeneratorObject) {
        console.log(promise);
    }
};
fetchData();
