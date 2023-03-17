/**
 * 1. Write a JavaScript program to take an array as input from the user and calculate
    the sum of numbers in odd places and the sum of numbers at even places.
    a) Print the difference between the two sums
    b) Print the number of elements in odd places
    c) Print the number of elements in even places
    d) Print the average of all elements in the array
    e) Print GCD of Sum of Numbers at Odd Places and Sum of Numbers at Even
    Places
    Sample Input:
    [ 1, 2, 3, 4, 5 ]
    Explanation:
    Sum of Numbers at Odd Places = 1 + 3 + 5 = 9
    Sum of Numbers at Even Places = 2 + 4 = 6
    Difference = 9 - 6 = 3
    Sample Output:
    Difference = 3
    Odd Elements = 3
    Even Elements = 2
    Average = 3
 */


function calculate(array) {
  let tempArray = array
  let evenNums = tempArray.filter((num) => (num % 2 === 0));
  let oddNums = tempArray.filter((num) => (num % 2 !== 0));

  let sumofEven =  evenNums.reduce(add, 0)
  let sumofOdd =  oddNums.reduce(add, 0)

  
  console.log(" a) Print the difference between the two sums: ", sumofOdd - sumofEven);
  console.log(" b) Print the number of elements in odd places: ", oddNums.length);
  console.log(" c) Print the number of elements in even places: ", evenNums.length);
  console.log(" d) Print the average of all elements in the array", tempArray.reduce(add, 0) / array.length);
  console.log(" e) Print GCD of Sum of Numbers at Odd Places: ", sumofOdd, "\n e) Print GCD of Sum of Numbers at Even Places: ", sumofEven);
  
}

function add(accumulator, a) {
  return accumulator + a;
}

calculate([ 1, 2, 3, 4, 5 ])