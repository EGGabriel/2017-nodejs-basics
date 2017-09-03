const students = require('./students.json')
const studentName = process.argv[2]

for (var i = 0; i < students.length; i++) {
    var student = students[i];
    if (student.name.toString().charAt(0) == studentName.toString().charAt(0) && 
        student.name.toString().charAt(1) == studentName.toString().charAt(1) && 
        student.name.toString().charAt(2) == studentName.toString().charAt(2) && 
        student.name.toString().charAt(3) == studentName.toString().charAt(3) && 
        student.name.toString().charAt(4) == studentName.toString().charAt(4) && 
        student.name.toString().charAt(5) == studentName.toString().charAt(5)) {
        console.log(student.name)
    }
}
// var one = student.name.toString().charAt(0)
// var two = student.name.toString().charAt(1)
// var thr = student.name.toString().charAt(2)
// var fou = student.name.toString().charAt(3)
// var string = "www.google.com";

// if(string[0] == "w" && string[1] == "w" && string[2] == "w" && string[3] == "."){
//     string começa com www.
// }