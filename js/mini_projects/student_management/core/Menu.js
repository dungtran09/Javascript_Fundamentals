import readline from "readline-sync";

const display = (options, menu) => {
  const promtMsg = "What option to you choise?: ";
  const errorMsg = "Please enter a valid number in ranger! Try Again.";
  console.log("M E N U");
  console.log("==================");
  for (let index = 0; index < menu.length; index++) {
    console.log(`${options[index]}: ${menu[index]}`);
  }
  console.log("==================");
  const choise = validate(promtMsg, errorMsg);
  return choise;
};

const validate = (promtMsg, msgError) => {
  let number = 0;
  while (true) {
    try {
      number = Number(readline.question(`${promtMsg}`));
      if (number < 0 || Object.is(number, NaN)) {
        throw msgError;
      }
      break;
    } catch (msgError) {
      console.log(msgError);
    }
  }
  return number;
};
export { display };
