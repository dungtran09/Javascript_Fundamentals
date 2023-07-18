// const li = document.createElement("li");
// li.textContent = "Home";

// const parentNode = document.querySelector("#menu");
// console.log(parentNode);
//
// parentNode.appendChild(li);

const createMenuItems = (name) => {
  const li = document.createElement("li");

  li.textContent = name;
  return li;
};

const parentNode = document.querySelector("#menu");

parentNode.appendChild(createMenuItems("Java"));
parentNode.appendChild(createMenuItems("JavaScript"));
parentNode.appendChild(createMenuItems("Data Structures"));

// move element

const firstList = document.querySelector("#first-list");
const li = firstList.firstElementChild;

const secondList = document.querySelector("#second-list");
secondList.appendChild(li);
