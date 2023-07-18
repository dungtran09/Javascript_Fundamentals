const h1 = document.querySelector("h1");
const p = document.createElement("p");

p.innerText = "This is JavaScript DOM after() method demo";
h1.after(p);

// insert multil element

const ul = document.querySelector("#languages");
const subjects = [
  "OOP/Java",
  "Data Structures",
  "Net Working",
  "Operating System",
  "Database",
];

const liElems = subjects.map((subject) => {
  const li = document.createElement("li");
  li.innerText = subject;
  return li;
});

console.log(...liElems);

ul.lastChild.after(...liElems);
