const input = document.querySelector("#username");
// console.log(input.attributes);

for (const attribute of input.attributes) {
  console.log(`${attribute.name}=${attribute.value}`);
}

input.setAttribute("tabIndex", 2);
console.log(input.tabIndex);

input.tabIndex = 3;
console.log(input.getAttribute("tabIndex"));

input.setAttribute("value", "guest");
console.log(input.value);

input.value = "admin";
console.log(input.getAttribute("value"));

const checkbox = document.querySelector("#checkAccept");
console.log(checkbox.checked);

const password = document.querySelector("#password");
const styleAttribute = input.getAttribute("style");
console.log(styleAttribute);
console.log(input.style);

// access attributes custome
const bar = document.querySelector("#main");

console.log(bar.dataset);
