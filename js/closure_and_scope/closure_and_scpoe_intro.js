const wrapperFunc = () => {
  const prices = [10, 20, 30, 40];
  const logPrices = () => {
    console.log(prices);
  };

  logPrices();
  console.log(prices);
};

wrapperFunc();
