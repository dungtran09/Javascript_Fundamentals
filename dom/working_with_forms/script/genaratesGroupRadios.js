const sizes = ["XS", "S", "M", "L", "XL", "XXL"];

const groupElem = document.querySelector("#group");

groupElem.innerHTML = sizes
  .map((size) => {
    return `<div>
            <input type="radio" name="size" value="${size}" id="${size}"/>
            <label for="${size}">${size}</label>
          </div>`;
  })
  .join(" ");

const radioButtons = document.querySelectorAll("input[name='size']");
// console.log(radioButtons);

const showSelected = function (event) {
  let output = document.querySelector("#output");
  console.log(event);
  if (this.checked) {
    output.innerText = `Your are selected: ${this.value}`;
  }
};

for (const radioButton of radioButtons) {
  radioButton.addEventListener("change", showSelected);
}
