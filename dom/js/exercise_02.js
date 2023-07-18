const p = document.createElement("p");
p.setAttribute("id", "title-1");

const htmlString = "Hello, How <strong>are</strong> you";

p.innerHTML = htmlString;

document.body.append(p);
