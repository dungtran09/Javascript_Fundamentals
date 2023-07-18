const menu = document.getElementById("menu");
console.log(menu);

const items = menu.getElementsByClassName("item");

console.log(items);

const data = [].map.call(items, (item) => {
  return item.textContent;
});
console.log(data);

const elements = document.getElementsByClassName("secondary");
console.log(elements);

const data2 = [].map.call(elements, (element) => {
  return element.textContent;
});

console.log(data2);
