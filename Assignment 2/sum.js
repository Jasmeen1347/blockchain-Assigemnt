// 3. Write a JavaScript program to find the sum of the multiples of 3 and 5 under 1000

let maxNumber = 1000

let sum = 0

for (let index = 0; index < maxNumber; index++) {
    if (index % 3 === 0 || index % 5 === 0) {
        sum = sum + index
    }
}

console.log(sum);