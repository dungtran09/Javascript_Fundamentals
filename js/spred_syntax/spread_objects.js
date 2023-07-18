const capials = {
    'Ha Noi': 'Viet Nam',
    Berlin: 'Russia',
    'Phnom Penh': 'Camcodia',
    'New Delhi': 'India',
    'Washington DC': 'USA'
};
console.log(capials);

const capialsExtended = {};

for (const capial of Object.entries(capials)) {
    capialsExtended[capial[0]] = capial[1];
}

capialsExtended['Japan'] = 'Tokyo';
console.log(capialsExtended)


const capialsExtended_2 = {
    ... capialsExtended,
    'BangCok': 'Thailand',
    'London': 'UK'
}
console.log(capialsExtended_2);
