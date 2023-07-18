const runner = {
  name: "Runner",
  run: function (speed) {
    console.log(`${this.name} run at ${speed} mph.`);
  },
};

const flyer = {
  name: "Flyer",
  fly: function (speed) {
    console.log(`${this.name} flies at ${speed} mph.`);
  },
};

let run = runner.run.bind(flyer, 20);
run();
