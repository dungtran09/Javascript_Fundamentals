const link = document.querySelector("#js-tuto");

if (link.hasAttribute("target")) {
  console.log(link.getAttribute("target"));
} else {
  console.log("Attribute is not empty!");
}
