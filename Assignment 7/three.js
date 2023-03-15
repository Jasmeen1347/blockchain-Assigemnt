/*
 3. Input a String S with two words, and replace first word with second word
    and display the result -
    Input: “Hii Boy” Output: “Boy Hii”
*/

function three(str) {
  return str.split(" ").reverse().join(" ")
}

console.log(three("Hii boys"));