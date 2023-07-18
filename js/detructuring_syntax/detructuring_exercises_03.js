const xyzCalc = ({x, y, z}) => {
    return `Result of: (5 * ${x}) - (2 * ${y}) - ${z} = ${(5 * x) - (2 * y) - z}`;
};

console.log(xyzCalc({x: 20, y: 2, z: 7}));
console.log(xyzCalc({x: 2, y: 1, z: 20}));
console.log(xyzCalc({x: 100, y: 100, z: 100}));
