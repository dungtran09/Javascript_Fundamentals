const parentNode = document.querySelector("ul");
console.log(parentNode);

const newTodo = document.createElement("li");
newTodo.textContent = "Learn JavaScript, DOM";
// console.log(newTodo);

// append new todo into the end of the list
parentNode.appendChild(newTodo);

const anotherTodo = document.createElement("li");
// console.log(anotherTodo);
anotherTodo.textContent = "Learn HTML/CSS";

// append new todo at first the list
// console.log(todoList.firstElementChild);
parentNode.insertBefore(anotherTodo, parentNode.firstElementChild);

// replace an existing node

const newChildNode = document.createElement("li");
newChildNode.textContent = "Learn Java/OOP";
console.log(newChildNode);
parentNode.replaceChild(newChildNode, parentNode.children[3]);

// remove node and return node has been removed
parentNode.removeChild(parentNode.lastElementChild);

// remove node ifself remove() method
parentNode.children[3].remove();
