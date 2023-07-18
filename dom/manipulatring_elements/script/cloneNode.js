const menu = document.querySelector("#menu");

const cloneMenu = menu.cloneNode(true);
cloneMenu.id = "menu-mobile";

document.body.appendChild(cloneMenu);
