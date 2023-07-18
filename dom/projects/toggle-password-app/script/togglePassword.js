const togglePassword = document.querySelector("#togglePassword");
console.log(togglePassword);

const passWord = document.querySelector("#password");
console.log(passWord);

togglePassword.addEventListener("click", function () {
  const type =
    passWord.getAttribute("type") === "password" ? "text" : "password";
  passWord.setAttribute("type", type);

  this.classList.toggle("bi-eye");
});

// prevent form submit
const form = document.querySelector("form");
form.addEventListener("click", (event) => {
  event.preventDefault();
});
