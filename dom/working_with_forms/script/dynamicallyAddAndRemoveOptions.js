const btnAdd = document.querySelector("#btnAdd");
const btnRemove = document.querySelector("#btnRemove");
const framework = document.querySelector("#framework");
const listBox = document.querySelector("#list");

// console.log(btnAdd);
// console.log(btnRemove);
// console.log(framework);
// console.log(listBox);

const validateOption = (input) => {
  input.trim();

  if (input === "") {
    return false;
  }

  return true;
};

// to add option into list
btnAdd.addEventListener("click", (event) => {
  event.preventDefault();

  // validate the option
  if (validateOption(framework.value)) {
    //create new option
    const option = new Option(framework.value, framework.value);
    console.log(option);

    // add option into list
    listBox.add(option, undefined);

    //reset the value of input
    framework.value = "";
    framework.focus();
  } else {
    alert("Please enter a name.");
    return;
  }
});

// to remove option out of list
btnRemove.addEventListener("click", (event) => {
  event.preventDefault();

  const selected = [];

  for (let index = 0; index < listBox.options.length; index++) {
    selected[index] = listBox.options[index].selected;
  }

  // remove all ooption selected
  let index = listBox.options.length;
  while (index--) {
    if (selected[index]) {
      listBox.remove(index);
    }
  }
});
