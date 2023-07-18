import readline from "readline-sync";
import fs from "fs";
import https from "https";

const dowloadPokemon = async () => {
  // store url images pokemon
  const urlImagesPokemon = [];

  // store infos pokemon
  const infoPokemon = {};

  // user enter name pokemon
  const namePokemon = readline.question("Enter a name: ").trim().toLowerCase();

  // fetch data from API
  const url = `https://pokeapi.co/api/v2/pokemon/${namePokemon}`;
  const fetchData = await fetch(url);
  const infoObject = await fetchData.json();

  // get and filter proterty infos and saved
  const name = await infoObject.name;
  infoPokemon.name = name;

  const status = await infoObject.stats;
  for (const key in status) {
    const proper = status[key].stat.name;
    infoPokemon[proper] = status[key].base_stat;
  }

  console.log(infoPokemon);

  // get and filter images and saved
  const spritesImages = await infoObject.sprites;
  for (const key in spritesImages) {
    if (spritesImages[key] === null || key === "other" || key === "versions") {
      continue;
    } else {
      urlImagesPokemon.push(spritesImages[key]);
    }
  }

  // create dir
  const dir = `./pokemons/${infoPokemon.name}`;
  if (!fs.existsSync(dir)) {
    fs.mkdirSync(dir);
  }

  // create file
  const createStream = fs.createWriteStream(`${dir}/${infoPokemon.name}.txt`);

  // write info into dir
  for (const key in infoPokemon) {
    const content = `${key}: ${infoPokemon[key]} \n`;
    fs.appendFile(`${dir}/${infoPokemon.name}.txt`, content, (err) => {
      return err;
    });
  }
  createStream.end();

  // dowload images
  for await (const urlImg of urlImagesPokemon) {
    const fetchImage = await fetch(urlImg);
    const urlImage = fetchImage.url;
    const splitUrl = urlImg.split("/");
    const nameImage = `${dir}/${splitUrl.slice(7).join("-")}`;
    const file = fs.createWriteStream(nameImage);

    https
      .get(urlImage, (response) => {
        response.pipe(file);
        file.on("finish", () => {
          file.close();
          console.log(
            `Image: '${splitUrl.slice(7).join("-")}' dowloaded successfully!`
          );
        });
      })
      .on("error", (error) => {
        fs.unlink(nameImage);
        console.log(`Error dowloading image: ${error.message}`);
      });
  }
};

dowloadPokemon();
