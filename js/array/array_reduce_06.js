const prices = [1.23, 19.99, 85.2, 32.87, 8, 5.2];

const sum = prices.reduce((result, price) => {
    if (price > 6) {
        result += price;
    } else if (price < 6) {
        result += (price * (20 / 100 + 1));
    }
    return result;
}, 0);

console.log(sum);
