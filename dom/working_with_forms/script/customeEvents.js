const heightlight = (element, callback) => {
  const bgColor = "moccasin";
  element.style.backgroundColor = bgColor;

  if (callback && typeof callback === "function") {
    callback(element);
  }
};

const note = document.querySelector(".note");

const addBorder = (element) => {
  element.style.border = "solid 1px salmon";
};

heightlight(note, addBorder);
