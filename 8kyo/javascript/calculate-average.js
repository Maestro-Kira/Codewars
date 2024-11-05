/*
Write a function which calculates the average of the numbers in a given array.
Note: Empty arrays should return 0.
 */
function findAverage(arr) {
    if (arr.length === 0) {
        return 0
    }
    return arr.reduce((acc, cur) => acc + cur, 0) / arr.length;
}

console.log(findAverage([]))
console.log(findAverage([1,2,3,4]))