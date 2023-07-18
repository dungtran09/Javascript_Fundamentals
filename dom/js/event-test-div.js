const sectionElement = document.querySelector("section");

sectionElement.addEventListener("click", (event) => {
  console.log(event.target.textContent);
});
