const btn = document.querySelector("#btn");
const selectBoxes = document.querySelector("#framework");

btn.onclick = (event) => {
  event.preventDefault();

  const selectedValues = [].filter
    .call(selectBoxes.options, (option) => {
      return option.selected;
    })
    .map((option) => {
      return option.text;
    });
  console.log(selectedValues);
};
