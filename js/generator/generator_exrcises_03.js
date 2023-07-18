let readline = require('readline-sync');

const min = Number(readline.question('Enter min number to random: '));
const max = Number(readline.question('Enter max number to random: '));
const maxNumberOfGenerate = Number(readline.question('Enter Max number of generate: '));
let start = 0;
const randomNumbers = function*(maxNumberOfGenerate, min, max) {
    while (start < maxNumberOfGenerate) {
        yield Math.floor((Math.random() * max) + min);
        start++;
    }
}

const random = randomNumbers(maxNumberOfGenerate, min, max);

for (const number of random) {
    console.log(number);
}
