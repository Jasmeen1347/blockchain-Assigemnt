let inputNumber = 153

let convertToArray = inputNumber.toString().split('')

let sum = 0
let pow

for (let index = 0; index < convertToArray.length; index++) {
    pow = Math.pow(parseInt(convertToArray[index]), 3)
    sum += pow
}


if (sum === inputNumber) {
    console.log(inputNumber, ' is Armstrong Number');
} else {
    console.log(inputNumber, ' is Not Armstrong Number');
}


// console.log(convertToArray)