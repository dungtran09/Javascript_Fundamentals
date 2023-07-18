const houseForSale = {
    area: 940,
    value: 320000,
    streetName: 'Fifth Street',
    built: '2012',
    owner: {name: 'Balake', age: 27},
    offers: [290000, 285000, 315000, 312000],
};

 // console.log(houseForSale);

delete houseForSale.built;
// console.log(houseForSale);

houseForSale.owner.age = 30;
// console.log(houseForSale);

houseForSale['sale price'] = 312000;
console.log(houseForSale);

const maxOfferPrice = houseForSale.offers.reduce((prevPrice, currPrice) => {
    if (prevPrice < currPrice) {
        return prevPrice = currPrice;
    }
    return prevPrice;
}, 0);

console.log(`Max Offer Price is: $${maxOfferPrice}`);
