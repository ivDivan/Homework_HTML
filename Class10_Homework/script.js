class Academy{
    constructor(name, start, end) {
        this.name = name;
        this.students = [];
        this.subjects = [];
        this.start = start;
        this.end = end;
        this.numberOfClasses = this.subjects.length * 10
    }

    printStudents() {
        this.students.forEach(student => console.log(student));
    }

    printSubjects() {
        this.subjects.forEach(subject => console.log(subject));
    }
}

class Subject {
    constructor(title, isElective, academy) {
        this.title = title;
        this.numberOfClasses = 10;
        this.isElective = isElective;
        this.academy = academy;
        this.students = [];
    }

    overrideClasses(num) {
        if(num >= 3) {
            this.numberOfClasses = num;
        } else {
            console.log("Number of classes cannot be smaller than 3.")
        }
    }
}

class Student {
    constructor(firstName, lastName, age) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.age = age;
        this.completedSubjects = [];
        this.academy = null;
        this.currentSubject = null;
    }

    startAcademy(academy) {
        this.academy = academy;
        academy.students.push(this);
    }

    startSubject(subject) {
        if(this.academy === null) {
            console.log("Nope, you need to choose an academy first.");
            return;
        } else if(subject.academy !== this.academy) {
            console.log("Nope, no such subject in this academy.");
            return;
        } else if(this.currentSubject !== null) {
            this.completedSubjects.push(this.currentSubject);
        }
        this.currentSubject = subject;
        subject.students.push(this);
        this.academy.subjects.push(subject);
    }
}

const Leontic = new Academy("Leontic", new Date(2024, 6, 6), new Date(2024, 12, 12));

const cuttingBangs = new Subject("Bangs", true, Leontic);
const dyingHair = new Subject("Dying", false, Leontic);

// console.log(Leontic);
// console.log(cuttingBangs);
// console.log(dyingHair);

const mile = new Student("Mile", "Kitic", 69);

mile.startAcademy(Leontic);
mile.startSubject(cuttingBangs);


Leontic.printStudents();
Leontic.printSubjects();

