const box = document.querySelector(".box");

console.log(box);
const width = box.offsetWidth;
const height = box.offsetHeight;
console.log({ width, height });

console.log(box.getBoundingClientRect());
