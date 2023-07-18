let current = document.querySelector(".current");
console.log(current);

let nextSibling = current.nextElementSibling;
// console.log(nextSibling);

// while (nextSibling) {
//   console.log(nextSibling);
//   nextSibling = nextSibling.nextElementSibling;
// }

let prevSibling = current.previousElementSibling;
// console.log(prevSibling);

// while (prevSibling) {
//   console.log(prevSibling);
//   prevSibling = prevSibling.previousElementSibling;
// }

const getSiblings = (current) => {
  const siblings = [];

  if (!current.parentNode) {
    return siblings;
  }
  let sibling = current.parentNode.firstChild;

  while (sibling) {
    if (sibling.nodeType === 1 && sibling !== current) {
      siblings.push(sibling);
    }
    sibling = sibling.nextSibling;
  }

  return siblings;
};

const siblings = getSiblings(current);
console.log(siblings);

const siblingText = siblings.map((ele) => {
  return ele.innerHTML;
});

console.log(siblingText);
