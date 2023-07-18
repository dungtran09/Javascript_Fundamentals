const colors = ["Red", "Green", "Blue"];

// solution 1
// colors.forEach((color) => {
//   // create att id
//   const id = `color-${color}`;
//
//   // create att lable
//   const label = document.createElement("label");
//   label.setAttribute("for", id);
//
//   // create checkbox
//   const checkBox = document.createElement("input");
//   checkBox.type = "checkbox";
//   checkBox.name = "color";
//   checkBox.value = color;
//   checkBox.id = id;
//
//   // place checkbox inside a label
//   label.appendChild(checkBox);
//   console.log(label);
//
//   // create Text for Node
//   label.appendChild(document.createTextNode(color));
//
//   // add label into div root
//   const root = document.querySelector("#root");
//   root.appendChild(label);
// });

// solution 2

const root = document.querySelector("#root");
root.innerHTML = colors
  .map((color) => {
    return `
<label for="color-${color}">
  <input type="checkbox" name="color" value"${color}" id="color-${color}"/> ${color}
</label>`;
  })
  .join(" ");
