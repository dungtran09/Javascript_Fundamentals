function Person(name) {
  this.name = name;
}

const leo = Person("leo");
const taylor = new Person("taylor");

console.log(leo);
console.log(taylor.name);

console.log(Object.getOwnPropertyNames(taylor));
console.log(Object.getOwnPropertyNames(taylor.__proto__));
console.log(Object.getOwnPropertyNames(taylor.__proto__.constructor));
console.log(taylor.__proto__.constructor.name);
