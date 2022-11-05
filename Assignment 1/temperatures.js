// let c = 60 // Celsius
// let f = 45 // Fahrenheit

// let tempature1 = c / 5 * 9 + 32
// let tempature2 = (f - 32) / 9 * 5

function CelsiusTOFahrenheit(c) {
    return c / 5 * 9 + 32
}

function FahrenheitToCelsius(f) {
    return (f - 32) / 9 * 5
}


console.log("60 Celsius to fahrenheit is ", CelsiusTOFahrenheit(60));
console.log("45 Fahrenheit to celsius is ", FahrenheitToCelsius(45));
