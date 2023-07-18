const phoneNumber = "020-382-6940";

const regex = /[0-9]{3}-[0-9]{3}-[0-9]{4}/;

console.log(regex.test(phoneNumber));

console.log(phoneNumber.match(regex));
