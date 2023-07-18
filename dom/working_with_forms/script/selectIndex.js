const btn = document.querySelector("#btn");
const selectBoxs = document.querySelector("#framework");
console.log(selectBoxs.options);

for (const selectBox of selectBoxs) {
  console.log(selectBox.text);
  console.log(selectBox.value);
}

btn.onclick = (event) => {
  event.preventDefault();

  console.log(selectBoxs.selectedIndex);
  console.log(selectBoxs.value);
};
