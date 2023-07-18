function Person(name, age, favouriteFood) {
  this.name = name;
  this.age = age;
  this.favouriteFood = favouriteFood;
}

Person.prototype.greeting = function () {
  console.log(`${this.name} says hello!`);
};

function SuperHero(name, age, favouriteFood, overPovered) {
  Person.call(this, name, age, favouriteFood);
  this.overPovered = overPovered;
}

const anya = new Person("Anya", 40, "Sour Keys");
const batman = new SuperHero("Bruce", 55, "Steak", false);

anya.greeting();
// batman.greeting();

// before set prototype
console.log(Object.getOwnPropertyNames(anya));
console.log(Object.getOwnPropertyNames(anya.__proto__));
console.log(Object.getOwnPropertyNames(anya.__proto__.__proto__));

console.log(Object.getOwnPropertyNames(batman));
console.log(Object.getOwnPropertyNames(batman.__proto__));
console.log(Object.getOwnPropertyNames(batman.__proto__.__proto__));

console.log("============================================");
SuperHero.prototype.__proto__ = Person.prototype;

// after set prototype
console.log(Object.getOwnPropertyNames(anya));
console.log(Object.getOwnPropertyNames(anya.__proto__));
console.log(Object.getOwnPropertyNames(anya.__proto__.__proto__));

console.log(Object.getOwnPropertyNames(batman));
console.log(Object.getOwnPropertyNames(batman.__proto__));
console.log(Object.getOwnPropertyNames(batman.__proto__.__proto__));

batman.greeting();
