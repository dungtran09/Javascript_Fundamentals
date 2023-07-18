const input = document.querySelector(".input");
const result = document.querySelector("#result");

input.addEventListener("change", function () {
  console.log(this.value);
  result.textContent = this.value;
});
