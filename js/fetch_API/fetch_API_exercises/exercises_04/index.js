import https from "https";
import fs from "fs";

const fetchUrlImage = async () => {
  const url = "https://w.wallhaven.cc/full/we/wallhaven-welmxp.png";
  const fetchImage = await fetch(url);
  const imageUrl = fetchImage.url;
  const imageName = imageUrl.split("/").pop();
  const file = fs.createWriteStream(imageName);
  https
    .get(imageUrl, (response) => {
      response.pipe(file);

      file.on("finish", () => {
        file.close();
        console.log(`Image dowloaded as: ${imageName}`);
      });
    })
    .on("error", (error) => {
      fs.unlink(imageName);
      console.log(`Error dowloading image: ${error.message}`);
    });
};

fetchUrlImage();
