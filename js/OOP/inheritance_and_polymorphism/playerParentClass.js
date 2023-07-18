class Player {
  constructor(name, hp, mp, items) {
    this.name = name;
    this.hp = hp;
    this.mp = mp;
    this.items = items;
  }

  speak() {
    console.log(`${this.name} says, Hello! How are you?`);
  }
  // speak(message) {
  //   console.log(`${this.name} says, ${message}.`);
  // }
}
export { Player };
