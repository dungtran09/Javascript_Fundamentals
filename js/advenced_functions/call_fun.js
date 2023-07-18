let greeting = "Hi";

let messager = {
  greeting: "Hello",
};

const say = function (name) {
  console.log(`${this.greeting} ${name}`);
};

say.call(this, "Dung");
say.call(messager, "Dung");
