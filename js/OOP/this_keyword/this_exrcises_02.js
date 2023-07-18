function Person(name, age, country) {
  this.name = name;
  this.age = age;
  this.country = country;
}

function PersonNomal(name, age, country) {
  const instance = {
    name,
    age,
    country,
  };
  instance.__proto__ = PersonNomal.prototype;

  return instance;
}

const nader = new Person("Nader", 28, "USA");
const dug = PersonNomal("Dung", 27, "VN");

console.log(nader);
console.log(dug);

console.log(nader.__proto__.constructor.name);
console.log(nader.__proto__.__proto__.constructor.name);

console.log("====================================");

console.log(dug.__proto__.constructor.name);
console.log(dug.__proto__.__proto__.constructor.name);

// console.log(Object.getOwnPropertyNames(nader.__proto__));
// console.log(Object.getOwnPropertyNames(dug.__proto__));
