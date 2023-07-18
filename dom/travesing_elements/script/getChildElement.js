const content = document.getElementById("menu");
let firstChild = content.firstChild.nodeName;

console.log(firstChild);

firstChild = content.firstElementChild;
console.log(firstChild);

let lastChild = content.lastElementChild;
console.log(lastChild);

let children = content.childNodes;
console.log(children);

children = content.children;
console.log(children);
