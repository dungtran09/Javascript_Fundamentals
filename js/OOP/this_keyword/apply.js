const nader = {
  name: "Nader",
  greeting: function (...arguments) {
    console.log(arguments);
    console.log(this);
    console.log(`Hello, ${this.name}. How are you today?`);
  },
  greetingArrow: () => {
    console.log(this);
    console.log(`Hello, ${this.name}. How are you?`);
  },
  friend: {
    name: "Doe John",
    greeting: function (...arguments) {
      console.log(arguments);
      console.log(this);
      console.log(`Hello, ${this.name}. How are you?`);
    },
  },
};

nader.greeting();

console.log("----------------------------------------");

nader.friend.greeting();

console.log("----------------------------------------");

nader.greeting.apply({ name: "Dung" }, [10, 20, 30]);

console.log("----------------------------------------");

nader.friend.greeting.apply({ name: "Johathan" }, ["This", "is", "a", "text"]);
