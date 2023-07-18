import { Student } from "./Student.js";
import readline from "readline-sync";
import fs from "fs";

class Utility extends Student {
  listStudents;
  constructor() {
    super();
    this.listStudents = [];
  }

  get getSize() {
    return this.listStudents.length;
  }

  create() {
    let name, rollNumber, birthDate, address, major, gpa;
    let scores = [];

    let promtMsg = "Enter number of student to add: ";
    let msgError = "Format number is not valid. Try again!";

    let numOfStudents = this.validate(promtMsg, msgError);
    for (let index = 1; index <= numOfStudents; index++) {
      console.log(`Enter info student(s): (Entered ${index}/${numOfStudents})`);
      name = readline.question("  Enter name: ").trim().toUpperCase();

      promtMsg = "  Enter roll number: ";
      rollNumber = this.validate(promtMsg, msgError);

      promtMsg = "  Enter birth year: ";
      birthDate = this.validate(promtMsg, msgError);

      promtMsg = "  Enter address: ";
      address = readline.question(promtMsg).trim();

      promtMsg = "  Enter major: ";
      major = readline.question(promtMsg);

      promtMsg = "  Enter scores (sparated by space): ";
      scores = readline.question(promtMsg).split(" ");
      const tempScores = scores.map((score) => {
        return parseInt(score, 10);
      });
      scores = tempScores;

      // cal gpa
      gpa = scores.reduce((prevScore, currScore) => {
        return prevScore + currScore;
      }, 0);
      gpa = Number((gpa / scores.length).toFixed(2));

      let student = new Student(
        name,
        rollNumber,
        birthDate,
        address,
        major,
        scores,
        gpa
      );
      this.listStudents.push({ ...student });
      console.log("Add student Succsessfully!\n");
    }
  }

  print() {
    if (this.isEmpty()) {
      console.log("There is no student in the list!");
      return;
    }

    for (const student of this.listStudents) {
      console.log(student);
    }
  }

  sort() {
    if (this.isEmpty()) {
      console.log("There is no student in the list!");
      return;
    }
    this.listStudents.sort((firstScore, secondScore) => {
      return firstScore.gpa - secondScore.gpa;
    });
    console.log("Sorded by GPA order increment!: ");
    this.print();
  }

  search() {
    const promtMsg = "Enter a name to search: ";
    const name = readline.question(promtMsg);
    let result = this.listStudents.find((student) => {
      return student.name === name;
    });
    if (result != undefined) {
      console.log(result);
    } else {
      console.log("Student is not found!");
    }
  }

  remove() {
    const promtMsg = "Enter a name to search: ";
    const name = readline.question(promtMsg);
    this.listStudents = this.listStudents.filter((student) => {
      return student.name != name;
    });
    this.print();
  }

  update() {
    const promtMsg = "Enter a name to update: ";
    const name = readline.question(promtMsg);
  }

  export() {
    if (this.isEmpty()) {
      console.log("There is no student in the list!");
      return;
    }

    // create dir
    const nameFile = "students.txt";
    const dir = "./data";
    if (!fs.existsSync(dir)) {
      fs.mkdirSync(dir);
    }

    // create file
    const createStream = fs.createWriteStream(`${dir}/${nameFile}`);

    // write student into file;
    for (const student of this.listStudents) {
      let content = `
      {
        name: ${student.name}
        birthDate: ${student.birthDate}
        major: ${student.major}
        scores: ${student.scores}
        gpa: ${student.gpa}
      } \n`;
      console.log(content);
      fs.appendFile(`${dir}/${nameFile}`, content, "utf-8", (error) => {
        return error;
      });
    }
    createStream.end();
  }

  isEmpty() {
    if (this.listStudents.length === 0) {
      return true;
    } else {
      return false;
    }
  }

  validate(promtMsg, msgError) {
    let number = 0;
    while (true) {
      try {
        number = Number(readline.question(promtMsg));
        if (number < 0 || Object.is(number, NaN)) {
          throw msgError;
        }
        break;
      } catch (msgError) {
        console.log(msgError);
      }
    }
    return number;
  }
}

export { Utility };
