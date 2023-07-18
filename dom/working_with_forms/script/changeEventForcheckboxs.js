const result = document.querySelector("#result");

document.body.addEventListener("change", function (event) {
  const target = event.target;
  let message;

  switch (target.id) {
    case "c-lang":
      message = "C/C++";
      break;
    case "java-lang":
      message = "Java";
      break;
    case "das":
      message = "Data Structures";
      break;
    default:
      break;
  }

  result.textContent = message;
});
