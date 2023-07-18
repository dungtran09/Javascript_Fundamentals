const book = {
    name: '1984',
    author: 'Georgre Orwell',
    year: 1949,
    rating: 4.9,
    genre: 'Sicence Fiction',
    movie: true,
};

book[Symbol.iterator] = function* () {
    const entries = Object.entries(book);

    for (const entry of entries) {
        yield entry;
    }
};

for (const key of book) {
    console.log(key);
}

