class Player {}

const hanSolo = new Player();

console.log(hanSolo);
console.log(Object.getOwnPropertyNames(hanSolo));
console.log(Object.getOwnPropertyNames(hanSolo.__proto__));
console.log(Object.getOwnPropertyNames(hanSolo.__proto__.__proto__));

console.log("==============================");

function PlayerFn() {}

const nader = new PlayerFn();
console.log(nader);
console.log(Object.getOwnPropertyNames(nader));
console.log(Object.getOwnPropertyNames(nader.__proto__));
console.log(Object.getOwnPropertyNames(nader.__proto__.__proto__));
