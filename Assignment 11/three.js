/**
 * 
 * 3. Write a JavaScript program to flatten the array, ie, turns a deep array into a plainarray.
    Note: Do not use array.flat();
    Sample Input:
    [ 1, 2, [ 3, 4, [ 5 ] ] ]
    Output:
    [ 1, 2, 3, 4, 5 ]

 */

let sample = [1, 2, [3, 4, [5, 6, [7, 8]]]];
let output = sample.join().split(',')
console.log(output);