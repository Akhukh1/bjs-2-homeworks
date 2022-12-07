function Student(name, gender, age) {

  this.name = name;
  this.gender = gender;
  this.age = age;
  this.marks = [];
}

let student1 = new Student("Василиса", "женский", 19);
let student2 = new Student("Артём", "мужской", 25);
let student3 = new Student("Саша", "мужской", 21);

Student.prototype.setSubject = function (subjectName) {
  this.subject = subjectName;
}

Student.prototype.addMarks = function (...marks) {
  if (this?.marks) {
    this.marks = [...this.marks, ...marks];
  }

}

Student.prototype.getAverage = function () {

  if (!this?.marks || this.marks.length === 0) {
    return 0;
  }

  let sumMark = 0;

  for (mark of this.marks) {
    sumMark = sumMark + mark;
  }

  averageMark = sumMark / this.marks.length;
  return averageMark;

}

Student.prototype.exclude = function (reason) {

  delete this.subject;
  delete this.marks;

  this.excluded = reason;

}


