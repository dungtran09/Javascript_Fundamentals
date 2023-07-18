const names = new Set();
const namesCaps = new Set();

names.add('Dung Tran');
names.add('Ngoc Hoai');
names.add('Thanh Nha');
names.add('Thuy Vi');

for (const name of names) {
    namesCaps.add(name.toUpperCase());
};

console.log(names);
console.log(namesCaps);
