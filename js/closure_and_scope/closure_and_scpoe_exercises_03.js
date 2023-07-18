import readline from "readline-sync";

const createRandomGift = () => {
  const stock = ["Coca", "Chips", "Coffee", "Juice", "Nuts"];
  let coins = 0;
  coins = readline.question("How much do you want to deoposit?: ");

  const randomGift = () => {
    if (coins >= 25) {
      const resultRamdom =
        Math.floor(Math.random() * (stock.length - 0 + 1)) + 0;
      console.log(`Congratulations you got a: ${stock[resultRamdom]}`);
      coins -= 25;
      console.log(`Remain your coins: ${coins}`);
    } else {
      console.log(
        "You have deposit more coins to get an ramdom Gift! <limit <= 25>"
      );
    }
  };

  return randomGift;
};

const displayRandomGift = createRandomGift();
displayRandomGift();
displayRandomGift();
displayRandomGift();
displayRandomGift();
displayRandomGift();
displayRandomGift();
displayRandomGift();
displayRandomGift();
displayRandomGift();
displayRandomGift();
displayRandomGift();
displayRandomGift();
displayRandomGift();
displayRandomGift();
displayRandomGift();
displayRandomGift();
displayRandomGift();
displayRandomGift();
displayRandomGift();
