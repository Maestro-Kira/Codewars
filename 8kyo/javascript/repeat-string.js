/*
Write a function that accepts an integer n and a string s as parameters, and returns a string of s repeated exactly n times.
 */


// function repeatString(str, num) {
//     let repeatString = "";
//     for (let i = 0; i < num; i++) {
//         repeatString += str;
//     }
//     return repeatString;
// }

function repeatString(str, num){
    return str.repeat(num);
}
console.log(repeatString('Hello', 3));