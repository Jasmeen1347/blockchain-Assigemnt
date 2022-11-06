let height = 4
let displayData = "";
let count = 1;
for (let index = 1; index <= height; ++index) {
    for (let j = 1; j <= index; ++j) {
        displayData += count + " "
        count++
    }
    displayData += "\n";
}
 
console.log(displayData);