let widget = {
  color: "red",
};

let clonedWidget = Object.assign({}, widget);

console.log(clonedWidget);

widget.color = "orange";

console.log(clonedWidget);
console.log(widget);
