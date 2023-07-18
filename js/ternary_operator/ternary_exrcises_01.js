const wizards = ['Gandalf', 'Voldemort', 'Harry', 'Jafar', 'Sarunman', 'Merlinn'];
console.log(wizards);

const wizardsWithSpecialCharactor = wizards.map((wizard) => {
    return (wizard.includes('n') ? wizard.replaceAll('n', '*').toUpperCase() : wizard.toUpperCase());
});

console.log(wizardsWithSpecialCharactor);



