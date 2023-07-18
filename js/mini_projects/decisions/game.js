const readline = require("readline-sync");

const listChoise = ["EXIT GAME", "KEO", "BUA", "BAO"];
function showMenu() {
  console.log("---------WELCOME TO GAME (KEO-BUA-BAO)----------");
  console.log("0. 'EXIT GAME!'.");
  console.log("1. 'KEO'.");
  console.log("2. 'BUA'.");
  console.log("3. 'BAO'.");
}

function messageChoise(youChoose, computerChoose) {
  console.log(
    "You choose: " +
      listChoise[youChoose] +
      " - " +
      "Computer choose: " +
      listChoise[computerChoose]
  );
}

function playGame() {
  let flag = true;
  while (flag) {
    showMenu();
    let youChoose = Number(readline.question("What acction do you choise?: "));
    let computerChoose = Math.floor(Math.random() * 3) + 1;
    if (youChoose < 0 || youChoose > 3 || isNaN(youChoose)) {
      console.log("Please enter valid number! Try Again.\n");
    } else if (youChoose == 0 || youChoose == "") {
      flag = false;
      console.log("Bye See You!");
    } else {
      if (
        listChoise[youChoose] === listChoise[1] &&
        listChoise[computerChoose] === listChoise[2]
      ) {
        messageChoise(youChoose, computerChoose);
        console.log("Result: Computer WIN");
      } else if (
        listChoise[youChoose] === listChoise[1] &&
        listChoise[computerChoose] === listChoise[3]
      ) {
        messageChoise(youChoose, computerChoose);
        console.log("Result: YOU WIN");
      } else if (
        listChoise[youChoose] === listChoise[2] &&
        listChoise[computerChoose] === listChoise[1]
      ) {
        messageChoise(youChoose, computerChoose);
        console.log("Result: YOU WIN");
      } else if (
        listChoise[youChoose] === listChoise[2] &&
        listChoise[computerChoose] === listChoise[3]
      ) {
        messageChoise(youChoose, computerChoose);
        console.log("Result: Computer WIN");
      } else if (
        listChoise[youChoose] === listChoise[3] &&
        listChoise[computerChoose] === listChoise[1]
      ) {
        messageChoise(youChoose, computerChoose);
        console.log("Result: Computer WIN");
      } else if (
        listChoise[youChoose] === listChoise[3] &&
        listChoise[computerChoose] === listChoise[2]
      ) {
        messageChoise(youChoose, computerChoose);
        console.log("Result: YOU WIN");
      } else {
        messageChoise(youChoose, computerChoose);
        console.log("Result: DRAW");
      }
    }
  }
}

playGame();
