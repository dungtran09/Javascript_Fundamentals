const fizzbuzz = (startNumber, endNumber) => {
  if (startNumber > endNumber) {
    return;
  }

  if (startNumber % 3 == 0 && startNumber % 5 == 0) {
    console.log("FizzBuzz: " + startNumber);
  } else if (startNumber % 3 == 0) {
    console.log("Fizz: " + startNumber);
  } else if (startNumber % 5 == 0) {
    console.log("Buzz: " + startNumber);
  } else {
    console.log(startNumber);
  }
  fizzbuzz(++startNumber, endNumber);
};

fizzbuzz(100, 200);
