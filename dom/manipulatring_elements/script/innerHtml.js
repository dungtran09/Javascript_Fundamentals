const menu = document.querySelector("#menu");
console.log(menu.innerHTML);

// create new li element
const li = document.createElement("li");

li.innerHTML = "About US";

menu.appendChild(li);

console.log(menu.innerHTML);
