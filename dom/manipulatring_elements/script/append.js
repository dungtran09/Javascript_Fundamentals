const app = document.querySelector("#app");
const langs = ["TypeScript", "HTML", "CSS"];

const nodes = langs.map((lang) => {
  const li = document.createElement("li");
  li.textContent = lang;
  return li;
});

app.append(...nodes);
