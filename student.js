class Student {
    static numberOfstudents = 0;
    constructor(name, age, phno, marks) {
        Student.numberOfstudents++;
        this.name = name;
        this.age = age;
        this.phno = phno;
        this.marks = marks;
    }
    checkEligibility() {
        if(this.marks > 40) {
            console.log(`${this.name} is eligible`);
        } else {
            console.log(`${this.name} is not eligible`);
        }
    }
    eligibleForPlacements(_marks) {
        let that = this.age;
        return (that) => {
            if(that > 14) return true;
            else return false;
        }
    }
}

var student1 = new Student("John", 14, 123, 40);
var student2 = new Student("Mary", 13, 456, 45);
var student3 = new Student("John", 14, 789, 36);
var student4 = new Student("John", 14, 321, 28);
var student5 = new Student("John", 14, 654, 50);

student1.checkEligibility();