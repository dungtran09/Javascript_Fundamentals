const numbers = [5, 10, 15, 20, 25, 30 ,35, 10];

const totalNumbers = numbers.reduce((prevNumber, currNumber) => {
     if (currNumber <= 20) {
        console.log(`${prevNumber} + ${currNumber} = ${prevNumber + currNumber}`);
        return prevNumber + currNumber;
     } else {
        return prevNumber;
    }
}, 0);

console.log(`Total: ${totalNumbers}`);
