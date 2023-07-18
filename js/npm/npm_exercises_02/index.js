import { program } from "commander";

program.option("-n, --name <name>", "value");
program.parse();

const monkeyObj = program.opts();

const hello = (monkey) => {
  console.log(`Hello ${monkey.name}`);
};

hello(monkeyObj);
