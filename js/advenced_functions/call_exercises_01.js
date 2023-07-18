function Box(height, width) {
  this.height = height;
  this.width = width;
}

function Widget(height, width, color) {
  Box.call(this, height, width);
  this.color = color;
}

let widget = new Widget(100, 200, "red");

// console.log(widget);

// using call to borrowing function

const car = {
  name: "Car",

  start() {
    console.log(`Start the ${this.name}`);
  },

  speedUp() {
    console.log(`Speed up the ${this.name}`);
  },

  stop() {
    console.log(`Stop the ${this.name}`);
  },
};

const aircraft = {
  name: "Aircraft",
  fly() {
    console.log(`Flying...`);
  },
};

car.start.call(aircraft);
car.speedUp.call(aircraft);
aircraft.fly();
car.stop.call(aircraft);
