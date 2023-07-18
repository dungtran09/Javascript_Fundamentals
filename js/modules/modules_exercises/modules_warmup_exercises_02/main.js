import { square } from "./utils.js";
import { readlineSync } from "readline-sync";

const number = readlineSync.question("Enter a number: ");

const getResultSquareOfAnNumber = (num) => {
  console.log(square(num));
};

getResultSquareOfAnNumber(number);
