const btn = document.querySelector("#btn");
const radioButtons = document.querySelectorAll("input[name='size']");
const output = document.querySelector("#output");

btn.addEventListener("click", () => {
  let selected;

  for (const radioButton of radioButtons) {
    if (radioButton.checked) {
      // console.log(radioButton.checked);
      // console.log(radioButton.value);
      selected = radioButton.value;
      break;
    }
  }
  output.innerText = selected
    ? `Your selected: ${selected}`
    : "Your haven't selected any size.";
});
