class Loop {
    constructor(start = 0, end = Infinity, interval = 1) {
        this.start = start;
        this.end = end;
        this.interval = interval;
    }

    [Symbol.iterator]() {
        let counter = 0;
        let nextIndex = this.start;

        return {
            next: () => {
                if (nextIndex <= this.end) {
                    let result = {value: nextIndex, done: false};
                    nextIndex += this.interval;
                    counter++;
                    return result;
                }
                return {value: counter, done: true};
            },

            return: () => {
                console.log('Cleaning up...');
                return {value: undefined, done: true};
            }
        }
    }
}

let counterNumbers = new Loop(1, 10);

for (const number of counterNumbers) {
    if (number > 7) {
        break;
    }
    console.log(number);
}

// let iterator = counterNumbers[Symbol.iterator]();
// let result = iterator.next();
//
// while (!result.done) {
//     console.log(result.value);
//     result = iterator.next();
// }
