/*
    Write a JavaScript program which accept a number as input in the
    function parameter and insert dashes (-) between each two even
    numbers.
    For example if you accept 025468 as the output should be 0-254-6-8.
    computeDash(025468) -> 0-254-6-8.
*/

const computeDash = (number) => {
    number = number.toString()
    number = number.split('')
    let tmp = '';
    for (let index = 0; index < number.length; index++) {
        const element = number[index];
        
        if (element % 2 == 0 && index !== number.length - 1) {
            tmp += element + '-' ;
        } else {
            tmp += element;
        }
    }

    console.log(tmp);
}

computeDash(12345656)
computeDash('012345656')