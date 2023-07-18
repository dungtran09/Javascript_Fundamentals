const cat = {
  type: "Cat",
  sound: "Meow Meow",
};

const dog = {
  type: "Dog",
  sound: "Woof Woof",
};

const acction = function (message) {
  console.log(message);
  console.log(`   ${this.type} says, ${this.sound}...`);
};

// apply method
acction.apply(cat, ["What does cat say?"]);
acction.apply(dog, ["What does dog say?"]);

console.log("--------------------------");

// call method
acction.call(cat, "What does cat say?");
acction.call(dog, "What does dog say?");

console.log("--------------------------");

// bind method

const car = {
  speed: 5,
  start: function () {
    console.log(`Start with ${this.speed} km/h.`);
  },
};

const aircraft = {
  speed: 50,
  fly: function () {
    console.log("Flying");
  },
};

let boing747 = car.start.bind(aircraft);
boing747();

car.start.call(aircraft);
car.start.apply(aircraft);
