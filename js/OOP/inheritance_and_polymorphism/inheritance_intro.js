import { Player, Warrior } from "./warriorSubClass.js";

const enemy = new Player("Player", 100, 10, ["Fafnir", "Longinus", "Muramasa"]);
const warrior = new Warrior(
  "Genghis",
  300,
  50,
  ["Sabre", "Leather Shiled"],
  "Captain America"
);

console.log(enemy);
console.log(warrior);

enemy.speak();
// enemy.speak("Hi! Have a good day!");
warrior.speak();
