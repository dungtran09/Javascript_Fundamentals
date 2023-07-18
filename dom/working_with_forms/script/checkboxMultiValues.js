const btn = document.querySelector("#btn");

btn.addEventListener("click", () => {
  const listColors = [];
  const checkBoxs = document.querySelectorAll("input[name='color']:checked");
  console.log(checkBoxs);

  checkBoxs.forEach((checkBox) => {
    listColors.push(checkBox.value);
  });

  console.log(listColors);
});
