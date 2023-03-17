/*
  1. Are Higher Order functions and Call back functions the same ? If not, briefly explain about both functions.

  Ans => No they are not same.
  1) Higher Order functions
    => a function that take another function as agrument or return function as value. 
    => like setTimeOut(function, 300): 
        => this function take two agrument 1) another function 2) timeduration;
        => this function start execution after certain timeduration and then retrun another function as value.
  
  2) Callback functions
    => a function that pass to another function as argument and it will not return function as value.
*/


/**
 *  2. Is filter a Higher Order function in Javascript ? If yes, why ?
 *  Ans => Yes. because it return function as value and take function as parameter. 
 *   
 * 
 */


/**
 * 
 * 3. Give an example of a Higher Order function and a call back function used in the same program.
 * 
 */

function higherOrderFunction(arr, callbackfunction) {
  const output = [];
  for (let i = 0; i < arr.length; i++) {
    output.push(callbackfunction(arr[i]));
  }
  return output;
}

function multiply(input) {
  return input * 2;
}
const result = higherOrderFunction([1, 2, 3], multiply);




/**
 * 4. Carefully check the example below:
      a) What will be the output of this program ?
      b) Which function is a Higher Order function here ?
        const names= ['John', 'Tina','Kale','Max']
        function useFunction(arr,fn){
          for(let i=0; i<arr.length; i++){
              fn(arr[I]);
            }
          }
          function argFn (name){
          console.log("Hello " + name );
        }
        useFunction(names,argFn);


    a) What will be the output of this program ?
    Ans => this function have an error like I undefine. in this line fn(arr[I]);
          if i replace I(uppercase) with i(lowercase) then output will given below

          Hello John
          Hello Tina
          Hello Kale
          Hello Max


    b) Which function is a Higher Order function here ?
    Ans => useFunction is higher order function
 * 
 */