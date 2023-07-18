const sentence = "There once was a monkey who knew JavaScript...";

const pattern = /monkey/;
const pattern2 = /e/;

const result = pattern.test(sentence);
const checkMatch = sentence.match(pattern);

// console.log(result);
console.log(checkMatch);
