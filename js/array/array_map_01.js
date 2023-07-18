const cities = ['london', 'munbai', 'new york', 'new delhi'];
console.log(cities);

const bigCities = cities.map((city) => {
   return city.toUpperCase()
});
console.log(bigCities);
console.log(cities);
