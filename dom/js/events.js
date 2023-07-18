const changeText = () => {
  const pElement = document.querySelector("p");
  pElement.textContent = "Hello! How are you?";
};

const changeText2 = () => {
  const pElement = document.querySelector("p");
  pElement.textContent = "Have a good day!";
};

const changeText3 = () => {
  alert("Thanks for visit.");
};

// overrite changeText2
const button = document.querySelector("button");
// button.onclick = changeText2;
// button.onclick = changeText3;

// listen for click button
button.addEventListener("click", changeText2);
button.addEventListener("click", changeText3);

// test the keyCode, ky, and code properties
document.addEventListener("keydown", (event) => {
  console.log(`Key: ${event.keyCode}`);
  console.log(`Key: ${event.key}`);
  console.log(`Code: ${event.code}`);
});
