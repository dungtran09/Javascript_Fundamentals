class Loop {
    constructor(start = 1, end = Infinity, inteval = 1) {
        this.start = start;
        this.end = end;
        this.inteval = inteval;
    };

    *[Symbol.iterator]() {
        for (let index = this.start; index <= this.end; index += this.inteval) {
            yield index;
        }
    }
}

let countOneToTen = new Loop(1, 10);


for (const num of countOneToTen) {
    console.log(num);
}
