const divElement = document.querySelector("div");
console.log(divElement);

divElement.className = "warning";

const activeDivElement = document.querySelector(".active");
activeDivElement.classList.add("hidden");

activeDivElement.classList.remove("hidden");

activeDivElement.classList.toggle("hidden");

activeDivElement.classList.replace("active", "warning");
