// update a content
const idElement = document.querySelector("#demo-id");
console.log(idElement);

idElement.textContent = "Demo ID text updated";

// update mutil contents

const classElements = document.querySelectorAll(".demo-class");

// using loop foreach for modify contents
classElements.forEach((element) => {
  element.textContent = "All demo classs updated";
});
