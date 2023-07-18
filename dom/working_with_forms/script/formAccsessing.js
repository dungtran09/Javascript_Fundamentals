// funcs handel
const showMessage = (input, message, type) => {
  const msg = input.parentNode.querySelector("small");
  msg.innerText = message;

  input.className = type ? "success" : "error";
  console.log(input.className);
  return type;
};

const showError = (input, message) => {
  return showMessage(input, message, false);
};

const showSuccess = (input) => {
  return showMessage(input, "", true);
};

const hasValue = (input, message) => {
  if (input.value.trim() === "") {
    return showError(input, message);
  }
  return showSuccess(input);
};

// validate email
const validateEmail = (input, requiredEmail, invalidEmail) => {
  if (!hasValue(input, requiredEmail)) {
    return false;
  }

  const emailRegex =
    /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  const email = input.value.trim();

  if (!emailRegex.test(email)) {
    return showError(input, invalidEmail);
  }

  return true;
};

/********************************************/
const form = document.querySelector("#signup");

const NAME_REQUIRED = "Please enter your name";
const EMAIL_REQUIRED = "Please enter your email";
const EMAIL_INVALID = "Please enter a correct email address format";

form.addEventListener("submit", (event) => {
  // stop submmit form
  event.preventDefault();

  // valid the forms
  const nameValid = hasValue(form.elements["name"], NAME_REQUIRED);
  const emailValid = validateEmail(
    form.elements["email"],
    EMAIL_REQUIRED,
    EMAIL_INVALID
  );

  if (nameValid && emailValid) {
    alert("Demo only. No form was posted.");
  }
});
