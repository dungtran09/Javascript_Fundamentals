window.addEventListener("load", () => {
  console.log("The page has fully loaded!");
});

// load image
const logo = document.querySelector("#logo");
logo.addEventListener("load", (event) => {
  console.log("Logo has been loaded!");
});

logo.src = "../img/logo.svg";
