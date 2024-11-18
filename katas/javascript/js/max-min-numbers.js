/*
Your task is to make two functions ( max and min, or maximum and minimum, etc., depending on the language ) that receive a list of integers as input, and return the largest and lowest number in that list, respectively. Each function returns one number.
 */

let min = function(list){

    return Math.min(...list);
}

let max = function(list){

    return Math.max(...list);
}

console.log(min([1,2,3,4]));
console.log(max([1,2,4,5]));