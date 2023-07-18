const ul = document.querySelector("#menu");

const li = document.createElement("li");
li.textContent = "Home";

ul.replaceChild(li, ul.firstElementChild);
