const result = document.querySelector("#result");

document.body.addEventListener("change", function (event) {
  const taget = event.target;
  let message;

  switch (taget.id) {
    case "pending":
      message = "The Peding radio button changed!";
      break;
    case "resolved":
      message = "The Resolved radio button changed!";
      break;
    case "rejected":
      message = "The Rejected radio button changed!";
      break;
    default:
      break;
  }

  result.textContent = message;
});
