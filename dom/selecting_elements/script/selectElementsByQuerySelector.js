let element = document.querySelector("*");
console.log(element);

let elements = document.querySelectorAll("*");
console.log(elements);

// type selector
let firstHeading = document.querySelector("h1");
console.log(firstHeading);

let headingsH2 = document.querySelectorAll("h2");
console.log(headingsH2);

for (const h2 of headingsH2) {
  console.log(h2);
}

// class selector
let node = document.querySelector(".menu-item");
console.log(node);

let nodes = document.querySelectorAll(".menu-item");
console.log(nodes);

// ID selector
let logo = document.querySelector("#logo");
console.log(logo);

// attribute selector
let autoplay = document.querySelectorAll("[href='#']");
console.log(autoplay);

// grouping selector
elements = document.querySelectorAll("div, p");
console.log(elements);

// descendant combinator
let h2 = document.querySelectorAll("section h2");
console.log(h2);

// child combinator
let listItems = document.querySelectorAll("ul>li");
console.log(listItems);

listItems = document.querySelectorAll("ul.nav>li");
console.log(listItems);

// general sibling combinator
let links = document.querySelectorAll("p ~ a");
console.log(links);

// adjacent sibling combinator
links = document.querySelectorAll("h1 + a");
console.log(links);

// pseudo-classes
listItems = document.querySelectorAll("li:nth-child(2)");
console.log(listItems);

// pseudo-elements
links = document.querySelector("p::first-line");
console.log(links);
