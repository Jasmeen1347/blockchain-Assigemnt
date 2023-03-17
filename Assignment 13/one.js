/**
 * 1. Write a JavaScript program to get an array from the user and return the:
    a) Sum of all elements in the array using reduce()
    b) Average of all elements in the array using reduce()
    Sample Input:
    [ 1, 2, 3, 4, 5 ]
    Output:
    15
    3
 * 
 */


function func(array) {
  const sumofall = array.reduce((prevalue, currentValue) => prevalue + currentValue, 0);
  
  console.log("Sum of all elements in the array using reduce(): ", sumofall);
  console.log("Average of all elements in the array using reduce(): ", sumofall/array.length );
}

func([ 1, 2, 3, 4, 5 ])