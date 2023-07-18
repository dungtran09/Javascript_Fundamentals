const randomNumber = () => {
  const element = document.querySelector("p");
  element.innerHTML = Math.floor(Math.random() * (5 - 0 + 1) + 0);
};

const button = document.querySelector("button");
button.addEventListener("click", randomNumber);
