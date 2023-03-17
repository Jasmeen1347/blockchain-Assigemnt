/**
 * 2. Write a JavaScript program to
    a) Calculate grades on basis of marks
    >90 = A
    >80 = B
    >70 = C
    >60 = D
    >50 = E
    else = F
    b) Map the grades of each student
    c) Group students according to the grades they have received and display.
    Sample Input:
    let students = [
    { name: "John", marks: “92” },
    { name: "Oliver", marks: “85” },
    { name: "Michael", marks: “79” },
    { name: "Dwight", marks: “95”},
    { name: "Oscar", marks: “64” },
    { name: "Kevin", marks: “48” },
    ];
    Output:

    {
    'A': [ { name: "John", grade: “A” },
    { name: "Dwight", grade: “A” } ],
    'B': [ { name: "Oliver", grade: “B” } ],
    'C': [ { name: "Michael", grade: “C” } ],
    'D': [ { name: "Oscar", grade: “D” } ],
    'E': [ ],
    'F': [ { name: "Kevin", grade: “F” } ],
    }
 */

let students = [
  { name: "John", marks: 92 },
  { name: "Oliver", marks: 85 },
  { name: "Michael", marks: 79 },
  { name: "Dwight", marks: 95},
  { name: "Oscar", marks: 64 },
  { name: "Kevin", marks: 48 },
];

let outputArray = {A: [], B: [], C: [], D: [], E: [], F: []}

for (let index = 0; index < students.length; index++) {
  const element = students[index];
  if (element.marks > 90) {
    outputArray.A.push({name: element.name, grade: "A"})
  } else if (element.marks > 80 && element.marks < 90) {
    outputArray.B.push({name: element.name, grade: "B"})
  } else if (element.marks > 70 && element.marks < 80) {
    outputArray.C.push({name: element.name, grade: "C"})
  } else if (element.marks > 60 && element.marks < 70) {
    outputArray.D.push({name: element.name, grade: "D"})
  } else if(element.marks > 50 && element.marks < 60) {
    outputArray.E.push({name: element.name, grade: "E"})
  } else {
    outputArray.F.push({name: element.name, grade: "F"})
  }
}

console.log(outputArray);