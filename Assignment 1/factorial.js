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

console.log(getFactorial(0))