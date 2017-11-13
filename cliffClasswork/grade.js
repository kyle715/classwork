
var school = {
    "name": "CareerDevs",
    twitter: "@CareerDevs",
    classes: [
        {
            name: "Fall 2017 Morning Intro",
            time: "Morning",
            type: "Intro",
            year: 2017,
            semester: 2,
            students: [
                {
                    name: "Dara Hoy",
                    grade: 9
                },
                {
                    name: "Lauren George",
                    grade: 8
                }
            ]
        },
        {
            name: "Fall 2017 Evening Intro",
            time: "Evening",
            type: "Intermediate",
            year: 2017,
            semester: 2,
            students: [
                {
                    name: "Josh Bristol",
                    grade: 10
                },
                {
                    name: "Matt Curcio",
                    grade: 7,
                    gender: "male"
                }
            ]
        }
    ],
    
    addStudent: function(classNum, studentName, studentGrade) {
        this.classes[classNum].students.push({
            name: studentName,
            grade: studentGrade
        });
    },
     getAvgGrade: function(classNum) {
        var theStudents = this.classes[classNum].students //fill out dot notation
        var total = 0
        for(var i = 0; i < theStudents.length; i++) {
            total += theStudents[i].grade;
        }
        return total / theStudents.length;
    }
};
console.log(school.getAvgGrade(0));