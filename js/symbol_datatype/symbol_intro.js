const movie = {
    name: 'Blade Runner',
    director: 'Ridlay Scott',
    year: 1982,
    rating: 8.9,
    genre: 'Sience Fiction',
};

console.log(movie);

movie[Symbol('budget')] = 30;
movie[Symbol('boxOffice')] = 41.6;

console.log(movie);

for (const key in Object.getOwnPropertyDescriptors(movie)) {
    console.log(`${key} => ${movie[key]}`);
}


console.log(Object.getOwnPropertySymbols(movie));
