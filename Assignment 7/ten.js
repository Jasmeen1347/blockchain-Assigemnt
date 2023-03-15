/*
  10. Given a String S, achieve following tasks

  a) Convert the String into upper case.
  b) Convert only the first character to uppercase.

  c) Convert the String into lower case.
  d) Break the string into two halves and swap them.
  e) Count the repeating characters.
  f) Reverse the string
*/

//  a) Convert the String into upper case.
function a(str) {
  return str.toUpperCase();
}
console.log(a("hello"));

//  b) Convert only the first character to uppercase.
function b(str) {
  return str[0].toUpperCase() + str.slice(1);
}
console.log(b("hello"));

// c) Convert the String into lower case.
function c(str) {
  return str.toLowerCase();
}
console.log(c("HELLO"));

//  d) Break the string into two halves and swap them.
function d(str) {
  return str.split(" ").reverse().join(" ");
}
console.log(d("HELLO Word"));

// e) Count the repeating characters.

function e(string) {
  var freq = {};
  for (var i=0; i<string.length;i++) {
      var character = string.charAt(i);
      if (freq[character]) {
         freq[character]++;
      } else {
         freq[character] = 1;
      }
  }

  return freq;
};

console.log(e("HELLO Word"));

//  f) Reverse the string
function f(str) {
  return str.split(" ").reverse().join(" ");
}
console.log(f("HELLO Word"));