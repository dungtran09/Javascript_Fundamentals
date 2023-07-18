const ul = document.querySelector("#langs");

const languages = ["C/C++", "OOP/JAVA", "JAVASCRIPT"];

const nodes = languages.map((language) => {
  const li = document.createElement("li");
  li.textContent = language;
  return li;
});

ul.prepend(...nodes);
