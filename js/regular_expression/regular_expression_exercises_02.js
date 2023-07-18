const email = "monkey@trees.com";

const regex = /\.com$/;
console.log(regex.test(email));

const match = email.match(regex);
console.log(match);
