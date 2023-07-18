document.addEventListener("keydown", (event) => {
  const element = document.querySelector("h1");

  const a = "KeyA";
  const s = "KeyS";
  const d = "KeyD";
  const w = "KeyW";

  switch (event.code) {
    case a:
      element.textContent = "Left";
      break;
    case s:
      element.textContent = "Down";
      break;
    case d:
      element.textContent = "Right";
      break;
    case w:
      element.textContent = "Up";
      break;
    default:
      element.textContent = "Other";
      break;
  }
});
