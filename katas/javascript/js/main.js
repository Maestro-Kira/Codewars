/*
In this little assignment you are given a string of space separated numbers, and have to return the highest and lowest number.
 */

function sortArray(a) {
   let sortedArray = a.split(' ').map(Number);
   let min = Math.min(...sortedArray).toString();
   let max = Math.max(...sortedArray).toString();
   let result = [max, min];
   return result.join(' ');
}


console.log(sortArray("1 2 3 4 5"));
console.log(sortArray("-100 2 3 4 55 77"));