// Write a Javascript function to check whether a triangle is equilateral, isosceles or scalene

function checkCondition(x, y, z) {
    if (x == y &&  x == z && y == z) {
        return "triangle is equilateral"
    }

    else if (x == y ||  x == z || y == z) {
        return "triangle is isosceles"
    }

    else if (x !== y && x !== z && y !== z) {
        return "triangle is scalene"
    }
}

console.log(checkCondition(6,8,10))
console.log(checkCondition(10,10,10))
console.log(checkCondition(10,10,12))