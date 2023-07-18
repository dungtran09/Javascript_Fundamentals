console.log(Object.getOwnPropertyNames(Function));

console.log(Object.getOwnPropertyNames(Function.prototype));
// console.log(Object.getOwnPropertyNames(Function.prototype.__proto__));

const add = function (x, y) {
  console.log(new.target);
  return x + y;
};

console.log(add.length);
console.log(add.prototype);

const result = add(10, 20);
console.log(result);
console.log("------------------------------");
const obj = new add(10, 20);
console.log(obj);
