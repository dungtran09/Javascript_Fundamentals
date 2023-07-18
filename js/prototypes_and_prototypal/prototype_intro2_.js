Object.speakObject = () => {
  console.log("Hi!, This is from property Object.");
};
Array.speakArray = () => {
  console.log("Hi!, This is from property Array.");
};
String.speakString = () => {
  console.log("Hi!, This is from property String.");
};
Set.speakSet = () => {
  console.log("Hi!, This is from property Set.");
};
Map.speakMap = () => {
  console.log("Hi!, This is from property Map.");
};

/****************************************/

Object.__proto__.speakObject = () => {
  console.log("Hi!, This is from __proto__ Object.");
};
Array.__proto__.speakArray = () => {
  console.log("Hi!, This is from __proto__ Array.");
};
String.__proto__.speakString = () => {
  console.log("Hi!, This is from __proto__ String.");
};
Set.__proto__.speakSet = () => {
  console.log("Hi!, This is from __proto__ Set.");
};
Map.__proto__.speakMap = () => {
  console.log("Hi!, This is from __proto__ Map.");
};

/****************************************/

Object.__proto__.__proto__.speakObject = () => {
  console.log("Hi!, This is from __proto__.__proto__ Object.");
};
Array.__proto__.__proto__.speakArray = () => {
  console.log("Hi!, This is from __proto__.__proto__ Array.");
};
String.__proto__.__proto__.speakString = () => {
  console.log("Hi!, This is from __proto__.__proto__ String.");
};
Set.__proto__.__proto__.speakSet = () => {
  console.log("Hi!, This is from __proto__.__proto__ Set.");
};
Map.__proto__.__proto__.speakMap = () => {
  console.log("Hi!, This is from __proto__.__proto__ Map.");
};

/****************************************/

Object.prototype.speakObject = () => {
  console.log("Hi!, This is from prototype Object.");
};
Array.prototype.speakArray = () => {
  console.log("Hi!, This is from prototype Array.");
};
String.prototype.speakString = () => {
  console.log("Hi!, This is from prototype String.");
};
Set.prototype.speakSet = () => {
  console.log("Hi!, This is from prototype Set.");
};
Map.prototype.speakMap = () => {
  console.log("Hi!, This is from prototype Map.");
};

/****************************************/

const animal = {
  type: "Monkey",
  numLeg: 2,
};

console.log(
  "===================================================================="
);

console.log(Object.getOwnPropertyNames(Object));
console.log(Object.getOwnPropertyNames(Object.__proto__));
console.log(Object.getOwnPropertyNames(Object.__proto__.__proto__));

console.log(Object.getOwnPropertyNames(Object.prototype));

Object.speakObject();
Object.__proto__.speakObject();
Object.__proto__.__proto__.speakObject();

Object.prototype.speakObject();

console.log(
  "===================================================================="
);

console.log(Object.getOwnPropertyNames(Array));
console.log(Object.getOwnPropertyNames(Array.__proto__));
console.log(Object.getOwnPropertyNames(Array.__proto__.__proto__));

console.log(Object.getOwnPropertyNames(Array.prototype));
console.log(Object.getOwnPropertyNames(Array.prototype.__proto__));

String.speakString();
String.__proto__.speakString();
String.__proto__.__proto__.speakString();

String.prototype.speakString();

console.log(
  "===================================================================="
);
console.log(Object.getOwnPropertyNames(String));
console.log(Object.getOwnPropertyNames(String.__proto__));
console.log(Object.getOwnPropertyNames(String.__proto__.__proto__));

console.log(Object.getOwnPropertyNames(String.prototype));
console.log(Object.getOwnPropertyNames(String.prototype.__proto__));

Array.speakArray();
Array.__proto__.speakArray();
Array.__proto__.__proto__.speakArray();

Array.prototype.speakArray();

console.log(
  "===================================================================="
);
// the same (Original)
console.log(Object.getOwnPropertyNames(Set));
console.log(Object.getOwnPropertyNames(Set.__proto__));
console.log(Object.getOwnPropertyNames(Set.__proto__.__proto__));

console.log(Object.getOwnPropertyNames(Set.prototype));
console.log(Object.getOwnPropertyNames(Set.prototype.__proto__));

Set.speakSet();
Set.__proto__.speakSet();
Set.__proto__.__proto__.speakSet();

Set.prototype.speakSet();

console.log(
  "===================================================================="
);

console.log(Object.getOwnPropertyNames(Map));
console.log(Object.getOwnPropertyNames(Map.__proto__));
console.log(Object.getOwnPropertyNames(Map.__proto__.__proto__));

console.log(Object.getOwnPropertyNames(Map.prototype));
console.log(Object.getOwnPropertyNames(Map.prototype.__proto__));

Map.speakMap();
Map.__proto__.speakMap();
Map.__proto__.__proto__.speakMap();

Map.prototype.speakMap();

console.log(
  "===================================================================="
);
