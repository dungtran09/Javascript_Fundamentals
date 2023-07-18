function Person(name, age, favouriteFood) {
  this.name = name;
  this.age = age;
  this.favouriteFood = favouriteFood;
}

const nader = Person("Nader", 28, "Vocados");
const dug = new Person("DugXT", 27, "Chocola");

console.log(nader);
console.log(dug);

console.log(dug.__proto__.constructor.name);
console.log(dug.__proto__.__proto__.constructor.name);
console.log(dug.__proto__.__proto__.__proto__);

console.log(Object.getOwnPropertyNames(dug));
console.log(Object.getOwnPropertyNames(Person));
