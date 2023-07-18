const person = {
  name: "John Doe",
  getName() {
    console.log(this.name);
  },
};

setTimeout(() => {
  person.getName();
}, 2000);

let f = person.getName.bind(person);
setTimeout(f, 2000);
