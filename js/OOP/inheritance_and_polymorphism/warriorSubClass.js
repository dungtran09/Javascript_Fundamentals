import { Player } from "./playerParentClass.js";

// inheritance
class Warrior extends Player {
  constructor(name, hp, mp, items, shield) {
    super(name, hp, mp, items);
    this.shield = shield;
  }

  // polimophism
  speak() {
    console.log(`${this.name} says, Hello!`);
  }
}

export { Player, Warrior };
