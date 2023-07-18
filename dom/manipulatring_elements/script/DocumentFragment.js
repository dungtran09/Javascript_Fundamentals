const languages = ["Java", "C/C++", "JavaScript", "Data Structures"];

const langEle = document.querySelector("#language");
const fragment = new DocumentFragment();

languages.forEach((language) => {
  const li = document.createElement("li");
  li.innerHTML = language;
  fragment.appendChild(li);
});

console.log(fragment);

langEle.appendChild(fragment);
