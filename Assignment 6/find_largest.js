/*
2) Write a javascript function find_largest to return the nth largest number

    in an array-
    eg- given an array of integers- [3,45,6,7,23,5,7,8]

    find_largest(3) will return third largest number from the above array -
    which is 8.
*/

const find_largest = (number) => {
    array = [3, 45, 6, 7, 23, 5, 7, 8]
    array = array.sort((a, b) => b - a)
    console.log(array[number - 1])
}

find_largest(2)