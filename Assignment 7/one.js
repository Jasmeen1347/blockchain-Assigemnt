/*
 1. Input a String S, and check its length and if the length is greater than 4,
    truncate the input String and output the result -
    Input: Ice Output: Ice
    Input:Icecream Output:Icec...
*/

function truncate(str) {
  if (str.length > 4) {
    return str.slice(0, 4) + '...'
  }

  return str
}

console.log(truncate("Ice"));