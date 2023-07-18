const arr = [
  "Hey, Nice to meet you!",
  `<lable>Do you like Peas? <input type="checkbox" name="peas"></input></lable>`,
  "<ul><li>Hello, How are you?</li><li>Fine!, Have a good day!</li><li>Thanks, you too!</li></ul>",
];

function display(elem) {
  setTimeout(() => {
    document.body.appendChild(elem);
  }, 1000);
  document.body.innerHTML = "";
}

function randomText() {
  let elem;
  const random = Math.floor(Math.random() * (2 - 0 + 1) + 0);
  if (random === 0) {
    elem = document.createElement("p");
    elem.innerHTML = arr[random];
    display(elem);
  } else if (random === 1) {
    elem = document.createElement("div");
    elem.innerHTML = arr[random];
    display(elem);
  } else if (random === 2) {
    elem = document.createElement("nav");
    elem.innerHTML = arr[random];
    display(elem);
  }
}

const changeText = () => {
  setInterval(randomText, 1000);
};

// randomText(arr);

// changeText();
