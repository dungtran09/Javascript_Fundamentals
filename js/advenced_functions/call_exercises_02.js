const getOddNumbers = function () {
  return Array.prototype.filter.call(arguments, (num) => num % 2);
};

const results = getOddNumbers(10, 1, 3, 4, 8, 9);
console.log(results);
