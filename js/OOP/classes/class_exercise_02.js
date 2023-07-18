class Student {
  constructor(name, major, grades) {
    this.name = name;
    this.major = major;
    this.grades = grades;
  }

  setGrade(grade) {
    this.grades.push(grade);
  }

  getGpa() {
    let gpa = 0;
    for (const grade of this.grades) {
      gpa += grade;
    }
    return gpa / this.grades.length;
  }
}

const eva = new Student("Eva Nana", "Software Engineer", [79, 80, 90]);

console.log(eva);
eva.setGrade(70);
console.log(eva);
console.log(eva.getGpa());
