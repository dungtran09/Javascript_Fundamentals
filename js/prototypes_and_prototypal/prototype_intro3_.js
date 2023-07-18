function Foo() {
  console.log("Foo()");
}

Foo.prototype.name = "Boo";
Foo.prototype.getYear = function () {
  return 2023;
};

var f1 = new Foo();

console.log(f1.__proto__);
console.log(Foo.prototype);

console.log(Object.getOwnPropertyNames(Foo.prototype.constructor));

console.log(Object.getOwnPropertyNames(f1.__proto__.constructor));

console.log(Foo.constructor === Function.constructor);
console.log(Object.getOwnPropertyNames(Foo.constructor));
console.log(Object.getOwnPropertyNames(Function.constructor));
