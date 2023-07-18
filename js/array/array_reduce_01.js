let nameUser = 'Tech with Nader';

let splitName = nameUser.split('');

console.log(splitName);

nameUser = splitName.reduce((prevStr, currStr) => {
    return prevStr + currStr;
}, '');

console.log(nameUser);

