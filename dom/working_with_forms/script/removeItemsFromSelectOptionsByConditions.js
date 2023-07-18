const select = document.querySelector("#framework");
const btn = document.querySelector(".btn");

btn.addEventListener("click", (event) => {
  event.preventDefault();

  for (let index = 0; index < select.options.length; index++) {
    const text = select.options[index].text;
    if (text.endsWith("js")) {
      select.remove(index);
      index--;
    }
  }
});
