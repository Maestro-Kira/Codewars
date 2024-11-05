/*
Given a set of numbers, return the additive inverse of each. Each positive becomes negatives, and the negatives become positives.

 */

function invert(arr) {
    return arr.map((num) => -num)
}

console.log(invert([1,2,3,4,5,6,7,8,9,10]))
console.log(invert([-1, -2, -3, -4]))
console.log(invert([]))