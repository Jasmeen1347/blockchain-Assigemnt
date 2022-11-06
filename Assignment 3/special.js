/*

    Write a program to find whether a given number is special number or not-
    If the sum of the factorial of digits of a number (N) is equal to the

    number itself, the number (N) is called a special number.
    eg- 145 is a special number
    Logic- 1! + 4! + 5!= 1+24+120 i.e 14
*/

let inputNumber = 145

let convertToArray = inputNumber.toString().split('')

function getFactorial(number) {
    if (number < 1) {
        return "number must be >= 1"
    }
    let answer = 1
    for (let index = number; index >= 1; index--) {
        answer = answer * index
    }

    return answer
}

let sum = 0

for (let index = 0; index < convertToArray.length; index++) {
    sum += getFactorial(parseInt(convertToArray[index]))
}

if (sum === inputNumber) {
    console.log(inputNumber, ' is Special Number');
} else {
    console.log(inputNumber, ' is Not Special Number');
}