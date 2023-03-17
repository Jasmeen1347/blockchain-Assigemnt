/**
 * 2. Write a JavaScript program to take 2 arrays from the user and check if the
      number 4 exists in any of the arrays, or both of the arrays.
      Sample Input 1:
      [ 1, 2, 3, 4, 5 ]
      [ 4, 6, 1, 8, 2 ]
      Output:

      4 in both arrays
      Sample Input 2:
      [ 1, 2, 3, 6, 5 ]
      [ 4, 6, 1, 8, 2 ]
      Output:
      4 in array 2
      Sample Input 3:
      [ 1, 2, 3, 4, 5 ]
      [ 5, 6, 1, 8, 2 ]
      Output:
      4 in array 1
 * 
 */

  function findFour(array1, array2) {

    let arrayone = array1.filter((num) => (num === 4));
    let arraytwo = array2.filter((num) => (num === 4));
  
    if (arrayone.length > 0 && arraytwo.length === 0) {
      console.log("4 in array 1");
    }

    if (arraytwo.length > 0 && arrayone.length === 0) {
      console.log("4 in array 2");
    }

    if (arrayone.length > 0 && arraytwo.length > 0) {
      console.log("4 in both array");
    }
    
  }
  
  
  findFour([ 1, 2, 3, 5, 4 ],[ 1, 2, 3, 5, 4 ])