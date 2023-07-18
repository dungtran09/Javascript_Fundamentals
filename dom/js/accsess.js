// accsess element by ID
const idElement = document.getElementById("demo");
console.log(idElement);

idElement.style.border = "1px solid purple";

// accsess elements by class
const classElements = document.getElementsByClassName("demo");
console.log(classElements);

for (const element of classElements) {
  element.style.border = "1px solid orange";
}

// accsess elements by tag
const tagElements = document.getElementsByTagName("article");
console.log(tagElements);

for (const element of tagElements) {
  element.style.border = "1px solid blue";
}

// accsess element by query select
const queryElement = document.querySelector("#demo-query");
console.log(queryElement);

queryElement.style.border = "1px solid green";

// accsess elements by query all
const queryElements = document.querySelectorAll(".demo-query-all");
console.log(queryElements);

// for (const element of queryElements) {
//   element.style.border = "1px solid red";
// }

queryElements.forEach((element) => {
  element.style.border = "1px solid red";
});
