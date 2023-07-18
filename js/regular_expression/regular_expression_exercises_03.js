const string = "hello, how are you?, hello, i am Oke";
const regexGlobal = /hello/g;

console.log(regexGlobal.test(string));

const regexWithSet = /[bt]ear/;
console.log(regexWithSet.test("bear"));
