const fakeArray = {
  0: "Zero",
  1: "One",
  2: "Two",
  length: 3,
  __proto__: Array.prototype,
};

fakeArray.map((item) => {
  console.log(item);
});
