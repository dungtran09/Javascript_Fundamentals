const h1 = document.getElementsByTagName("h1")[0];
console.log(h1);

const p = document.getElementsByTagName("p")[0];
console.log(p);

const ul = document.getElementsByTagName("ul")[0];
console.log(ul);

console.log("===================");

console.log(h1.parentNode);
console.log(p.parentNode);
console.log(ul.parentNode);

console.log("===================");

console.log(h1.parentNode.parentNode);
console.log(p.parentNode.parentNode);
console.log(ul.parentNode.parentNode);

console.log("===================");

const html = document.documentElement;
console.log(html.parentNode);
console.log(html.parentElement);

console.log("===================");

console.log(ul.childNodes);

// ul.firstChild.style.background = "red"; error bebause firstChild is a text
// ul.firstElementChild.style.background = "azure"; // correct
// ul.lastElementChild.style.background = "lightcyan"; // correct

for (const element of ul.children) {
  // console.log(element);
  element.style.background = "salmon";
}

console.log("===================");

for (const element of p.childNodes) {
  console.log(element);
}

console.log("===================");

let bodyElements = document.body.children;
for (const element of bodyElements) {
  console.log(element);
}

console.log("===================");

bodyElements = document.body.childNodes;
for (const element of bodyElements) {
  console.log(element);
}

console.log("===================");

const tigerEle = ul.children[1];
tigerEle.nextElementSibling.style.background = "springgreen";
tigerEle.previousElementSibling.style.background = "lightcoral";
