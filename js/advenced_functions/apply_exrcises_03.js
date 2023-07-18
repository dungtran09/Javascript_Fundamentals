const computer = {
  name: "Macbook",
  isOn: false,

  turnOn() {
    this.isOn = true;
    console.log(`The ${this.name} is On.`);
  },

  turnOff() {
    this.isOn = false;
    console.log(`The ${this.name} is Off.`);
  },
};

const server = {
  name: "Dell Poweredge T30",
  isOn: false,
};

computer.turnOn.apply(server);
computer.turnOff.apply(server);
