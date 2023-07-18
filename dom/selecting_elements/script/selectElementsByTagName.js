const btnCount = document.getElementById("btnCount");

btnCount.addEventListener("click", () => {
  const headings = document.getElementsByTagName("h2");
  console.log(headings);
  console.log(headings.length);
});
