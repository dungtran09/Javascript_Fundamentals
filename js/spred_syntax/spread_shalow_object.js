const user = {
    name: 'Doe John',
    age: 27,
    address: {
        country: 'USA',
        capial: 'Washington DC',
        street: 'Smithsonian National Zoological Park'
    },
};


const userCopy = {
    ...user,
};

console.log(userCopy);

user.address.street = 'Connecticut Avenue NW';

console.log(userCopy);
console.log(userCopy);
