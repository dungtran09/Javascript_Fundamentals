const createParagraph = (string, attributes) => {
  let p = document.createElement("p");

  for (const key in attributes) {
    p.setAttribute(key, attributes[key]);
  }

  p.append(string);

  return document.body.append(p);
};

createParagraph("This is a paragraph 01", { id: "id-01", class: "class-01" });
createParagraph("This is a paragraph 02", { id: "id-02", class: "class-02" });
createParagraph("This is a paragraph 03");
