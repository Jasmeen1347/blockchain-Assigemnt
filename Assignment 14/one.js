/**
 * 1. Write a JavaScript program to:
    a) filter employees according to department = IT
    b) filter employees who earn a salary < 65000
    Sample Input:
    let employees = [
    {
    "id": 1,
    "name":"Abhinav",
    "department":"IT",
    "Salary":75000
    },
    {
    "id": 2,
    "name":"Gaurav",
    "department":"Sales",
    "Salary":52000
    },
    {
    "id": 3,
    "name":"Raj",
    "department":"IT",
    "Salary":64000
    }]
    Output:
    [
    {
    "id": 1,
    "name":"Abhinav",
    "department":"IT",
    "Salary":75000
    },
    {

    "id": 3,
    "name":"Raj",
    "department":"IT",
    "Salary":64000
    }
    ]
    [
    {
    "id": 2,
    "name":"Gaurav",
    "department":"Sales",
    "Salary":52000
    },
    {
    "id": 3,
    "name":"Raj",
    "department":"IT",
    "Salary":64000
    }
    ]
 * 
 */

let employees = [
  {
    "id": 1,
    "name": "Abhinav",
    "department": "IT",
    "Salary": 75000
  },
  {
    "id": 2,
    "name": "Gaurav",
    "department": "Sales",
    "Salary": 52000
  },
  {
    "id": 3,
    "name": "Raj",
    "department": "IT",
    "Salary": 64000
  }
];


let ITEmployee = employees.filter((emp) => (emp.department === "IT"));
console.log(ITEmployee);


let filterbysalary = employees.filter((emp) => (emp.Salary < 65000));
console.log(filterbysalary);