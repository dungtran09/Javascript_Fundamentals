const asyncGenerator = function* () {
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
    
    yield new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve({
                name: 'Junio',
                age: 22,
                address: {
                    country: 'VietNam',
                    capial: 'HaNoi',
                    street: null,
                },
                admin: false,

            });
        }, 5000);
    });

    yield new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve({
                name: 'Jang-jin-chun',
                age: 25,
                address: {
                    country: 'Korea',
                    capial: 'Soun',
                    street: null,
                },
                admin: false,

            });
        }, 6000);
    });
}

const asyncGeneratorObject = asyncGenerator();

for (const promise of asyncGeneratorObject) {
    const fetchData = async () => {
        const result = await promise;
        console.log(result);
    }
    fetchData();
}

console.log('Continue excute remainder...');
