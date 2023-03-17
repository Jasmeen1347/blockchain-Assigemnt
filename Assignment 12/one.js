/**
 * 1. Write a JavaScript program to map Employee Records according to Employee
    IDs.
    Employee: { id, name, salary }
    a) Print an array of all employee ids
    b) Print count of employees
    c) Print the name of the employee according to their id { key: value }
    d) Store the salaries of all employees in an array
    e) Calculate the average salary the company is paying to its employees
    Sample Input:
    "id": [ 67, 48, 29 ]
    "name": [ "Hitanshu", “Ninad”, “Amandeep” ]
    "salary": [ 75000, 82000, 98000 ]
    Output:
    [ 67, 48, 29 ]
    3
    67: Hitanshu
    48: Ninad
    29: Amandeep
    [ 75000, 82000, 98000 ]
    85000
 * 
 */

let employees = [
  {
    id: 67,
    name: "Hitanshu",
    salary: 75000
  },
  {
    id: 48,
    name: "Ninad",
    salary: 82000
  },
  {
    id: 29,
    name: "Amandeep",
    salary: 98000
  },
]


let ids = [];
let keyvalue = [];
let salaries = [];
let sumofSalary = 0
for (let index = 0; index < employees.length; index++) {
  ids.push(employees[index].id);
  keyvalue.push({ id: employees[index].id, name: employees[index].name })
  salaries.push(employees[index].salary);
  sumofSalary += employees[index].salary
}
console.log("Print an array of all employee ids \n", ids);
console.log("Print count of employees \n", employees.length);
console.log("Print the name of the employee according to their id { key: value } \n", keyvalue);
console.log("Store the salaries of all employees in an array \n", salaries);
console.log("Calculate the average salary the company is paying to its employees \n", sumofSalary / employees.length);