import { Utility } from "./Utility.js";
import { display } from "./Menu.js";

class SelfStudent extends Utility {
  start() {
    const options = [1, 2, 3, 4, 5, 6, 7, 8];
    const menu = [
      "Add",
      "Print",
      "Sort",
      "Search",
      "Update",
      "Remove",
      "Export",
      "Quit",
    ];
    const EXIT = options.length;
    let choise = Number(display(options, menu));

    while (choise != EXIT) {
      if (choise === options[0]) {
        this.create();
      } else if (choise === options[1]) {
        this.print();
      } else if (choise === options[2]) {
        this.sort();
      } else if (choise === options[3]) {
        this.search();
      } else if (choise === options[4]) {
        this.update();
      } else if (choise === options[5]) {
        this.remove();
      } else if (choise === options[6]) {
        this.export();
      }
      choise = Number(display(options, menu));
    }
    console.log("Goodbye! See you later.");
  }
}

export { SelfStudent };
