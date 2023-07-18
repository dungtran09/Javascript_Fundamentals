const message = document.querySelector(".message");

const styleComputed = getComputedStyle(message);
// console.log(styleComputed);

console.log(styleComputed.color);
console.log(styleComputed.background);

const styleComputedPseudoElement = getComputedStyle(message, "::first-letter");
console.log(styleComputedPseudoElement.fontSize);
