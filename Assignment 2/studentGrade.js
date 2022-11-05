/*
2. Write a function using switch case to find the grade of a student based
on marks obtained
    a. “S grade” if the marks are between 90 and 100.
    b. “A grade” if the marks are between 80 and 90.
    c. “B grade” if the marks are between 70 and 80.
    d. “C grade” if the marks are between 60 and 70.
    e. “D grade” if the marks are between 50 and 60.
    f. “E grade” if the marks are between 40 and 50.
    g. “Student has failed” if the marks are between 0 and 40.
    h. Else output “Invalid marks”.

*/

function checkResult(marks) {
    let message = ''
    switch (true) {
        case marks >= 0 && marks <= 40:
            message = "Student has failed"
            break;
        case marks >= 41 && marks <= 50:
            message = "E grade"
            break;
        case marks >= 51 && marks <= 60:
            message = "D grade"
            break;
        case marks >= 61 && marks <= 70:
            message = "C grade"
            break;
        case marks >= 71 && marks <= 80:
            message = "B grade"
            break;
        case marks >= 81 && marks <= 90:
            message = "A grade"
            break;
        case marks >= 91 && marks <= 100:
            message = "S grade"
            break;
        default:
            message = "Invalid marks"
            break;
    }

    return message
}


console.log(checkResult(45))
console.log(checkResult(65))
console.log(checkResult(90))
console.log(checkResult(35))
