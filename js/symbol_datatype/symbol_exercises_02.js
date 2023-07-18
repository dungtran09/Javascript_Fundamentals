const book = {
    name: '1984',
    author: 'Georgre Orwell',
    year: 1949,
    rating: 4.9,
    genre: 'Sicence Fiction',
    movie: true,
};

book[Symbol.asyncIterator] = async function* () {
    const entries = Object.entries(book);
    for (const entry of entries) {
        yield new Promise((resolve, reject) => {
            setTimeout(() => {
                resolve(entry);
            }, 500);
        });
    }
};

const showPropBook = async () => {
    for await (const prop of book) {
        console.log(prop);
    }
};

showPropBook();

