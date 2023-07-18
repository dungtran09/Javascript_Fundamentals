// create new element
const paragraph = document.createElement("p");
console.log(paragraph);

// add content into element just been created
paragraph.textContent = `I'm a brand new paragraph`;

// usung innerHTML to add text and element HTML(s)
paragraph.innerHTML = "I'm a paragraph with <strong>bold</strong> text!";

// create text node
const text = document.createTextNode("I'm a new text node");
console.log(text);

// log type of nodes
for (var key in Node) {
  console.log(key, " = " + Node[key]);
}
