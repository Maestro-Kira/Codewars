/*
Make this work: duplicate([1,2,3,4,5]); // [1,2,3,4,5,1,2,3,4,5]
 */

function duplicate(arr) {
   return [...arr, ...arr]
}

console.log(duplicate([1, 2, 3, 4, 5]));