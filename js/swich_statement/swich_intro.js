const readline = require("readline-sync");

const menus = ['No choise!','Mikl', 'Tea', 'Water', 'Hot chocolate', 'Coffee', 'Juice', 'Soda'];

let flag = true;

const printMenus = () => {
    console.log('-----MENU-----');
    console.log('0. Exit.');
    console.log('1. Milk.');
    console.log('2. Tea.');
    console.log('3. Water.');
    console.log('4. Hot chocolate.');
    console.log('5. Coffee.');
    console.log('6. Juice.');
    console.log('7. Soda.');
    console.log('----------------');
}

while (flag) {
    printMenus(); 
    const choise = Number(readline.question("What type of dinks do you choise?: "));

    switch (choise) {
        case 0:
            flag = false;
            console.log('See you later!');
            break;
        case 1:
            console.log('Your has choose: ' + menus[choise]);
            break;
        case 2:
            console.log('Your has choose: ' + menus[choise]);
            break;
        case 3:
            console.log('Your has choose: ' + menus[choise]);
            break;
        case 4:
            console.log('Your has choose: ' + menus[choise]);
            break;
        case 5:
            console.log('Your has choose: ' + menus[choise]);
            break;
        case 6:
            console.log('Your has choose: ' + menus[choise]);
            break;
        case 7:
            console.log('Your has choose: ' + menus[choise]);
            break;
        default:
            console.log('Please choise type of dinks display on the menu!');
            break;
    }
}
