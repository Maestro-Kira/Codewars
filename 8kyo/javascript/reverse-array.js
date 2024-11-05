/*
Given a random non-negative number, you have to return the digits of this number within an array in reverse order.
 */

function reverseArray(num) {
    return num.toString()
        .split('')
        .reverse()
        .map(number => parseInt(number));
}


console.log(reverseArray(35231));