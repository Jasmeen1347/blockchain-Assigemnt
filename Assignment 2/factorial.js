/*
Write a program to find the factorial of all prime numbers between a
given range . Range will be passed as 2 values in the function
parameters. eg- if it is needed to find the values for numbers 1-100, then
function declaration can look like - function prime(1,100).

*/

function isPrime (n)
{
    if (n < 2) return false;
    var q = Math.floor(Math.sqrt(n));

    for (var i = 2; i <= q; i++)
    {
        if (n % i == 0)
        {
            return false;
        }
    }

    return true;
}

function prime(start, end) {
    let answer = 1
    for (let index = start; index < end; index++) {
        if (isPrime(index)) {
            console.log(index);
            answer = answer * index
        }
        
    }

    return answer
}

console.log(prime(1, 100))