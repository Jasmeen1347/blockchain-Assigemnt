/*
 2. Input a String S with multiple words, and remove whitespaces and
    output the result -
    Input: “Hii Boy” Output: “HiiBoy”
*/

function removeWhiteSpace(str) {
  return str.replaceAll(' ', "")
}

console.log(removeWhiteSpace("Ice Cream sendvich"));