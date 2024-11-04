/*
Complete the square sum function so that it squares each number passed into it and then sums the results together.

For example, for [1, 2, 2] it should return 9
 */

function squareSum(numbers){
    return numbers.map(number => Math.pow(number, 2)).reduce((a, b) => a + b)
}
console.log(squareSum([1, 2, 3, 4, 5]))