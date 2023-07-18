const anchorElement = document.querySelector("a");
const props = [];

for (const key in anchorElement) {
  props.push(key);
}

console.log(props.sort());
