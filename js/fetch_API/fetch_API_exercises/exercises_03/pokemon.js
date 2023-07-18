const fetchDataFromAPI = async () => {
  const url = "https://pokeapi.co/api/v2/pokemon/pikachu";
  const fetchData = await fetch(url);
  const jsonData = await fetchData.json();
  const linksPNG = jsonData.sprites.other["official-artwork"];
  console.log(linksPNG);
  let i = 1;
  for (const key in linksPNG) {
    console.log(`Link ${i++}: ${linksPNG[key]}`);
  }
};

fetchDataFromAPI();
