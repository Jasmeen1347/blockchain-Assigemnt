/**
 * 4. Write a JavaScript program to take an array as input from the user and:
      a) Store all duplicate elements in a separate array
      b) Remove the duplicate elements from the original array
      Sample Input:
      [ 1, 2, 3, 2, 3, 4, 5 ]
      Output:
      Duplicate Elements = [ 2, 3 ]
      Array without duplicate elements = [ 1, 2, 3, 4, 5 ]
 */

function filterArray(array) {


  let duplicate = array.filter((item, index) => array.indexOf(item) !== index);;
  let nonDuplicate = array.filter((item, index) => array.indexOf(item) === index);
  
  console.log(duplicate, nonDuplicate);
}


filterArray([ 1, 2, 3, 5, 4, 5, 1 ])