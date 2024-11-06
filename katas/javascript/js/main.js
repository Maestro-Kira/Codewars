/*
Given a non-empty array of integers, return the result of multiplying the values together in order. Example:

[1, 2, 3, 4] => 1 * 2 * 3 * 4 = 24
 */


function resolve(arr){
    return arr.reduce((acc, cur) => acc * cur)
}


console.log(resolve([1, 2, 3, 4]))