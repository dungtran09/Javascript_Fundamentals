const button = document.querySelector("#btn");

button.addEventListener("click", (event) => {
  console.log(event.type);
  console.log("Hello Word!");
  event.stopPropagation();
});

document.body.addEventListener("click", function (event) {
  console.log("The body was clicked!");
});
