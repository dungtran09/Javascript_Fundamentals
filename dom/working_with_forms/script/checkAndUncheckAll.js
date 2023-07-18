const check = function (checked = true) {
  const checkBoxes = document.querySelectorAll("input[name='color']");
  checkBoxes.forEach((checkBox) => {
    checkBox.checked = checked;
  });
};

const checkAll = function () {
  check();
  this.onclick = uncheckAll;
};

const uncheckAll = function () {
  check(false);
  this.onclick = checkAll;
};

const btn = document.querySelector("#btn");
btn.onclick = checkAll;
