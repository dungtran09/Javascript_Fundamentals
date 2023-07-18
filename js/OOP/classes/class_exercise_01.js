class Animal {
  constructor(type, name) {
    this.type = type;
    this.name = name;
  }
}

const bird = new Animal("Bird", "Falcon");
const fish = new Animal("Fish", "Shark");

console.log(bird);
console.log(fish);
