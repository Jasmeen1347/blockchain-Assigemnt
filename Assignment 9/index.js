/*
  1. Carefully observe this example.
    a) Is the InnerFunction() a closure?
    b) What is output of this program

    function OuterFunction()
    { 
      var outerVariable = 100;
      function InnerFunction() {
        alert(outerVariable);
      }
      return InnerFunction;
    }
    var innerFunc = OuterFunction();
    innerFunc();

    a) Is the InnerFunction() a closure?
    Ans. => Yes.

    b) What is output of this program
    Ans. => in Browser program will give alert with message like 100 
*/


/*

  2. What is the difference between a closure and a scope ?
  Ans => 
    clouser: => a clouser is a function that contain variable of outer scope.
    scope: => a scope is define where you can access variable of js. there are two types of scope in js 1) local, 2) globle.

*/

/*
  3. What is a lexical scope and how is it related to closure?
  Ans => lexical scope is variables that must belong to parent scope.
        you can create clouser with lexical scope.

*/

/*
  4. Output of following closure ?
    for (var i = 0; i < 3; i++) {
      setTimeout(function log() {
        console.log(i); // What is logged?
      }, 1000);
    }
    
    // What is logged?
    Ans => 3 logged three times like below 
    3
    3
    3


*/
