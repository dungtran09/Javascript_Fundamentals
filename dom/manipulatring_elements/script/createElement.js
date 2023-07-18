const div = document.createElement("div");
console.log(div);

div.className = "wrapper";
div.id = "content";

// div.innerHTML = "<p>Create Element Example</p>";

// create a text node new and add to div
const text = document.createTextNode("Create Element Example");

div.appendChild(text);

document.body.appendChild(div);

const li = document.createElement("li");
li.textContent = "Products";

console.log(li);

const menu = document.querySelector("#menu");

console.log(menu);
menu.appendChild(li);

// create a script element

const loadJS = (url) => {
  const script = document.createElement("script");
  script.src = url;
  script.async = true;

  document.body.appendChild(script);
};

loadJS("./script/lib.js");
