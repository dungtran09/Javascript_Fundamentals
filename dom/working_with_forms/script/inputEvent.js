const message = document.querySelector("#message");
const result = document.querySelector("#result");

message.addEventListener("input", function () {
  result.textContent = this.value;
});
