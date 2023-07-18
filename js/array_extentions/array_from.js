function arrayFromArgs() {
  return Array.from(arguments);
}

console.log(arrayFromArgs(10, 20, 30));

function addOne() {
  return Array.from(arguments, (x) => x + 1);
}

console.log(addOne(10, 20, 30));
