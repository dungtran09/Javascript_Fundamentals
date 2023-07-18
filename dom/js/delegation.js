const element = document.querySelector("ul");
element.addEventListener("click", (event) => {
  console.log(event.composedPath());
  // console.log(event.target.textContent);
});
