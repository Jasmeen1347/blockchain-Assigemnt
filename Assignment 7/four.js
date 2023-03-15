/*
 4. Input a String S with a word, and replace character “a” with “x” and
    display the result -
    Input: “apple” Output: “xpple”
*/

function replacea(str) {
  return str.replaceAll('a', "x")
}

console.log(replacea("apple"));
