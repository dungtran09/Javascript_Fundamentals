const btn = document.querySelector("#btn");

btn.onclick = function () {
  alert("Clicked.");
  alert(this.id);
};
