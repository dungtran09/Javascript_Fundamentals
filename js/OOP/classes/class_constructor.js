class Animal {
  constructor(name, hp, status, skill) {
    this.name = name;
    this.hp = hp;
    this.status = status;
    this.skill = skill;
  }

  speak(message) {
    console.log(`${this.name} says ${message}.`);
  }
}

const pikachu = new Animal("Pikachu", 100, "Attack", "Thunderbolt");
console.log(pikachu);

pikachu.speak("Chiu Chiu");

console.log(Object.getOwnPropertyNames(pikachu));
console.log(Object.getOwnPropertyNames(pikachu.__proto__));
