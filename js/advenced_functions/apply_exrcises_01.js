const person = {
  firstName: "Nader",
};

const greeting = function (greeting, message) {
  return `${greeting} ${this.firstName}. ${message}`;
};

let result = greeting.apply(person, ["Hello", "How are you?"]);

console.log(result);
