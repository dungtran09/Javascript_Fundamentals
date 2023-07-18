const nums = [
  1,
  2,
  3,
  [4, 5, 6],
  [
    [7, [8, [9, 10, 11], 12, 13]],
    [14, 15],
  ],
  [16, [17, 18], [19, 20]],
];

const flatten = (nums) => {
  const result = [];
  for (const num of nums) {
    if (Array.isArray(num)) {
      const flattened = flatten(num);
      result.push(...flattened);
    } else {
      result.push(num);
    }
  }

  return result;
};

console.log(flatten(nums));
