const checkbox = document.querySelector("#accept");

console.log(checkbox.checked);

const btn = document.querySelector("#btn");

btn.onclick = () => {
  console.log(checkbox.value);
};
