const div = document.querySelector("#content");

for (const cssClass of div.classList) {
  console.log(cssClass);
}

// add classes
div.classList.add("info", "visible", "block");

// remove class
div.classList.remove("block");

// replace class
div.classList.replace("info", "warning");

// check if an element has a class
console.log(div.classList.contains("warning"));

// toogle class add jf not contain and remove if contain
div.classList.toggle("block");
