/* 
  1. Can we put duplicate values in the set object ?
  Ans => Yes but only first will be counted.
*/



/* 

2. Write the syntax for

a) Creating new set object

Ans => const newsetobject = new Set(["a","b","c"]);

b) Adding new element to set object
Ans => newsetobject.add('e')


c) Deleting element from set object
Ans => newsetobject.delete('e')

*/



/*

  3. Create a set object with four random numbers from 0 to 10. Check if this
    newly created set object has 8 in it. Use set object methods.

*/



function checkEight() {
  let newsetobject = new Set();
  for (let index = 0; index < 5; index++) {
    let ran = parseInt(Math.random() * 10)
    newsetobject.add(ran)
  }
  console.log(newsetobject);
  let isEight = false
  newsetobject.forEach(function (value) {
    if (value === 8) {
      isEight = true;
      return;
    }
  })

  return (isEight) ? "true" : "false"
}

console.log(checkEight());
