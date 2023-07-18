Object.speakObject = () => {
  console.log("Hi!, This is from property Object.");
};
Function.speakFunciton = () => {
  console.log("Hi!, This is from property Function.");
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
Function.__proto__.speakFunciton = () => {
  console.log("Hi!, This is from __proto__ Function.");
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
Function.__proto__.__proto__.speakFunciton = () => {
  console.log("Hi!, This is from __proto__.__proto__ Function.");
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

// Object.prototype.__proto__.speakObject = () => {
//   console.log("Hi!, This is from prototype.__proto__ Object.");
// };
// Array.prototype.__proto__.speakArray = () => {
//   console.log("Hi!, This is from prototype.__proto__ Array.");
// };
// String.prototype.__proto__.speakString = () => {
//   console.log("Hi!, This is from prototype.__proto__ String.");
// };
// Set.prototype.__proto__.speakSet = () => {
//   console.log("Hi!, This is from prototype.__proto__ Set.");
// };
// Map.prototype.__proto__.speakMap = () => {
//   console.log("Hi!, This is from prototype.__proto__ Map.");
// };

/****************************************/

Object.prototype.speakObject = () => {
  console.log("Hi!, This is from prototype Object.");
};
Function.prototype.speakFunciton = () => {
  console.log("Hi!, This is from prototype Function.");
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
console.log(Object.getOwnPropertyNames(Function));
console.log(Object.getOwnPropertyNames(Array));
console.log(Object.getOwnPropertyNames(String));
console.log(Object.getOwnPropertyNames(Set));
console.log(Object.getOwnPropertyNames(Map));

Object.speakObject();
Function.speakFunciton();
Array.speakArray();
String.speakString();
Set.speakSet();
Map.speakMap();

console.log(
  "===================================================================="
);

console.log(Object.getOwnPropertyNames(Object.__proto__));
console.log(Object.getOwnPropertyNames(Function.__proto__));
console.log(Object.getOwnPropertyNames(Array.__proto__));
console.log(Object.getOwnPropertyNames(String.__proto__));
console.log(Object.getOwnPropertyNames(Set.__proto__));
console.log(Object.getOwnPropertyNames(Map.__proto__));

Object.__proto__.speakObject();
Function.__proto__.speakFunciton();
Array.__proto__.speakArray();
String.__proto__.speakString();
Set.__proto__.speakSet();
Map.__proto__.speakMap();

console.log(
  "===================================================================="
);

console.log(Object.getOwnPropertyNames(Object.__proto__.__proto__));
console.log(Object.getOwnPropertyNames(Function.__proto__.__proto__));
console.log(Object.getOwnPropertyNames(Array.__proto__.__proto__));
console.log(Object.getOwnPropertyNames(String.__proto__.__proto__));
console.log(Object.getOwnPropertyNames(Set.__proto__.__proto__));
console.log(Object.getOwnPropertyNames(Map.__proto__.__proto__));

Object.__proto__.__proto__.speakObject();
Function.__proto__.__proto__.speakFunciton();
Array.__proto__.__proto__.speakArray();
String.__proto__.__proto__.speakString();
Set.__proto__.__proto__.speakSet();
Map.__proto__.__proto__.speakMap();

console.log(
  "===================================================================="
);

console.log(Object.getOwnPropertyNames(Object.prototype));
console.log(Object.getOwnPropertyNames(Function.prototype));
console.log(Object.getOwnPropertyNames(Array.prototype));
console.log(Object.getOwnPropertyNames(String.prototype));
console.log(Object.getOwnPropertyNames(Set.prototype));
console.log(Object.getOwnPropertyNames(Map.prototype));

Object.prototype.speakObject();
Function.prototype.speakFunciton();
Array.prototype.speakArray();
String.prototype.speakString();
Set.prototype.speakSet();
Map.prototype.speakMap();

console.log(
  "===================================================================="
);
// console.log(Object.getOwnPropertyNames(Object.prototype));
// console.log(Object.getOwnPropertyNames(Array.prototype.__proto__));
// console.log(Object.getOwnPropertyNames(String.prototype.__proto__));
// console.log(Object.getOwnPropertyNames(Set.prototype.__proto__));
// console.log(Object.getOwnPropertyNames(Map.prototype.__proto__));
//
// // Object.prototype.__proto__.speakObject();
// Array.prototype.__proto__.speakArray();
// String.prototype.__proto__.speakString();
// Set.prototype.__proto__.speakSet();
// Map.prototype.__proto__.speakMap();
