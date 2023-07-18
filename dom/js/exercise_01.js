const text = (document.textContent = "Document Object Model");
const h1 = document.createElement("h1");
h1.textContent = text;
document.body.append(h1);
