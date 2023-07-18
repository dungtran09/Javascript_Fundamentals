const usernameEl = document.querySelector("#username");
const emailEl = document.querySelector("#email");
const passwordEl = document.querySelector("#password");
const confirmPasswordEl = document.querySelector("#confirm-password");
const form = document.querySelector("#signup");

// to check if input is empty or not
const isRequired = (value) => {
  return value === "" ? false : true;
};

// to check the length of value in between min and max
const isBetween = (length, min, max) => {
  return length < min || length > max ? false : true;
};

// to check email is valid or not using regular expression
const isEmailValid = (email) => {
  const regex =
    /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return regex.test(email);
};

// to check if password is strong or not
const isPasswordSecure = (password) => {
  const regex = new RegExp(
    "^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*])(?=.{8,})"
  );
  return regex.test(password);
};

// to show error if occurs error
const showError = (input, message) => {
  const formField = input.parentElement;
  formField.classList.remove("success");
  formField.classList.add("error");

  const error = formField.querySelector("small");
  error.textContent = message;
};

// to show succes if input valid
const showSuccess = (input) => {
  const formField = input.parentElement;

  formField.classList.remove("error");
  formField.classList.add("success");

  const success = formField.querySelector("small");
  success.textContent = "";
};

// validate field username
const checkUsername = () => {
  let valid = false;
  const min = 3,
    max = 25;

  const username = usernameEl.value.trim();
  if (!isRequired(username)) {
    showError(usernameEl, "Username cannot be blank.");
  } else if (!isBetween(username.length, min, max)) {
    showError(usernameEl, `Username must be ${min} and ${max} characters.`);
  } else {
    showSuccess(usernameEl);
    valid = true;
  }
  return valid;
};

// validate field email
const checkEmail = () => {
  let valid = false;

  const email = emailEl.value.trim();
  if (!isRequired(email)) {
    showError(emailEl, "Email cannot be bank.");
  } else if (!isEmailValid(email)) {
    showError(emailEl, "Email is not valid.");
  } else {
    showSuccess(emailEl);
    valid = true;
  }
  return valid;
};

// validate field passwod
const checkPassword = () => {
  let valid = false;

  const password = passwordEl.value.trim();

  if (!isRequired(password)) {
    showError(passwordEl, "Pasword is not blank.");
  } else if (!isPasswordSecure(password)) {
    showError(
      passwordEl,
      "Passwod has at least 8 characters that include at least 1 lowercase charactor, 1 uppercase charactor, and 1 special charactor in (!@#$%^%&()'~)"
    );
  } else {
    showSuccess(emailEl);
    valid = true;
  }
  return valid;
};

// validate field confirm password
const checkConfirmPassword = () => {
  let valid = false;
  const confirmPassword = confirmPasswordEl.value.trim();
  const password = passwordEl.value.trim();

  if (!isRequired(confirmPassword)) {
    showError(confirmPasswordEl, "Please enter password again.");
  } else if (password !== confirmPassword) {
    showError(confirmPasswordEl, "Password is not match.");
  } else {
    showSuccess(confirmPasswordEl);
    valid = true;
  }
  return valid;
};

// debounce wait user pause type or in a small of time befor validate the input
const debounce = (fn, delay = 500) => {
  let timeoutid;

  return (...args) => {
    if (timeoutid) {
      clearTimeout(timeoutid);
    }
    timeoutid = setTimeout(() => {
      fn.apply(null, args);
    }, delay);
  };
};

form.addEventListener(
  "input",
  debounce(function (event) {
    switch (event.target.id) {
      case "username":
        checkUsername();
        break;
      case "email":
        checkEmail();
        break;
      case "password":
        checkPassword();
        break;
      case "confirm-password":
        checkConfirmPassword();
        break;
      default:
        break;
    }
  })
);

// validate input fields inthe submit event
form.addEventListener("submit", function (event) {
  event.preventDefault();

  // validate form
  const isUsernameValid = checkUsername();
  const isEmailValid = checkEmail();
  const isPasswordValid = checkPassword();
  const isConfirmPasswordValid = checkConfirmPassword();

  const isFormValid =
    isUsernameValid &&
    isEmailValid &&
    isPasswordValid &&
    isConfirmPasswordValid;

  if (isFormValid) {
    alert("The input field has been submit.");
  }
});
