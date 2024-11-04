/*
Create a function that takes an integer as an argument and returns "Even" for even numbers or "Odd" for odd numbers.
 */

function evenOdd(int){
    return int % 2 === 0 ? 'Even' : "Odd"
}

console.log(evenOdd(2))