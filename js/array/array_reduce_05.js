const companies = ['apple', 'tesla', 'spacex', 'amazone', 'meta', 'goole', 'microsoft'];
console.log(companies);

const companiesContainerLetterA = companies.reduce((result, company) => {
    if (company.includes('a')) {
        result.push(company);
    }
    return result;
}, []);

console.log(companiesContainerLetterA.join(' - '));


