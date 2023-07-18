Object.prototype.greet = function () {
  console.log(this);
  console.log(`Hello ${this.name}, How are you?`);
};

const nader = {
  name: "Nader",
  age: 28,
};

const john = {
  name: "John",
};

nader.greet();
john.greet();
