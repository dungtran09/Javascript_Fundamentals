const stringBuilder = () => {
  let string = "";

  const concatCharactor = (char) => {
    string += char + " ";
    return string;
  };

  return concatCharactor;
};

const builder = stringBuilder();

for (let index = 65; index <= 90; index++) {
  console.log(builder(String.fromCharCode(index)));
}
