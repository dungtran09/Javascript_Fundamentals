const quote = "What is this? A center for ants?";
const pattern = /ant/;

const isPatternExists = pattern.test(quote);
console.log(isPatternExists);

const match = quote.match(pattern);
console.log(match);
