/*
In this kata you will create a function that takes a list of non-negative integers and strings and returns a new list with the strings filtered out.

 */

function filterList (arr) {
   return arr.filter((item)=> typeof item === 'number')
}

console.log(  filterList ([1,2,3,4,5,6,7,8,9,10 , 'a', 'b', 'c']));