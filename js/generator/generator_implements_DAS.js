class Bag {
    constructor() {
        this.elements = [];
    };

    isEmpty() {
        return this.elements.length == 0;
    }

    add(element) {
        this.elements.push(element);
    }

    *[Symbol.iterator]() {
        for (const element of this.elements) {
            yield element;
        }
    }
}

let myBag = new Bag();

myBag.add(10);
myBag.add('Apple');
myBag.add('Monkey');
myBag.add(true);
myBag.add([3, 6, 9]);
myBag.add({name: 'Doe Jonh', age: 29});

for (const item of myBag) {
    console.log(item);    
}
