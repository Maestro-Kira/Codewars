/*
This kata is about multiplying a given number by eight if it is an even number and by nine otherwise.
 */
function multiply(n) {
    return n % 2 === 0 ? n * 8 : n * 9;
}
console.log(multiply(2));
console.log(multiply(5));
