const pokemonDowloader = () => {
  let cache = {};
  const dowload = async (namePokemon) => {
    const url = `https://pokeapi.co/api/v2/pokemon/${namePokemon}`;
    const fetchData = await fetch(url);
    const infoObject = await fetchData.json();
    const name = infoObject.name;

    if (cache.hasOwnProperty(name)) {
      console.log(`${name} was in the cache!`);
      return cache;
    } else {
      cache[name] = name;
      console.log(`${name} fetched from API. Storing in the cache!...`);
    }
    return cache;
  };
  return dowload;
};

const createPokemonDowloader = pokemonDowloader();

console.log(createPokemonDowloader("pikachu"));
console.log(createPokemonDowloader("mew"));
console.log(createPokemonDowloader("pikachu"));
console.log(createPokemonDowloader("gengar"));
