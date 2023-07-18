const createCounter = () => {
  let count = 0;

  const incrementCounter = () => {
    console.log(count++);
  };

  return incrementCounter;
};

const counter = createCounter();
counter();
counter();
counter();
counter();
counter();
