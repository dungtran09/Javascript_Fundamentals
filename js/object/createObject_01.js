const vietnamese = {
  id: 24,
  name: "VietNam",
  capital: "Ha Noi",
  neighbours: ["Lao", "Campodia", "China"],
};

console.log(vietnamese);

delete vietnamese.id;

console.log(vietnamese);

console.log(vietnamese.__proto__);
console.log(vietnamese.prototype);
