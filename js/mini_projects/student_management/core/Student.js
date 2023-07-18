import { Person } from "./Person.js";

class Student extends Person {
  rollNumber = null;
  major = null;
  scores = null;
  gpa = null;
  constructor(name, rollNumber, birthDate, address, major, scores, gpa) {
    super(name, birthDate, address);
    this.rollNumber = rollNumber;
    this.major = major;
    this.scores = scores;
    this.gpa = gpa;
  }

  get getRollNumber() {
    return this.rollNumber;
  }

  get getMajor() {
    return this.major;
  }

  get getScores() {
    return this.scores;
  }

  get getGpa() {
    return this.gpa;
  }

  set setRollNumber(rollNumber) {
    this.rollNumber = rollNumber;
  }

  set setMajor(major) {
    this.major = major;
  }

  set setScores(score) {
    this.scores.push(score);
  }

  set setGpa(gpa) {
    this.gpa = gpa;
  }

  display() {
    return `Info: ${this.name}, ${this.rollNumber}, ${this.birthDate}, ${this.address}, ${this.major}, ${this.scores}`;
  }
}

export { Student };
