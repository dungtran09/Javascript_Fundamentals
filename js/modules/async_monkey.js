const monkey = {
  name: "Abu",
  species: "Capunchin",
  hobbies: ["stealing"],
  age: 10,
};

const getName = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log(monkey);
      monkey.age++;
      resolve(monkey);
    }, 2000);
  });
};

const printMonkey = await getName();

export { printMonkey };
export default getName;
