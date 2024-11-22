/*
You are going to be given a non-empty string. Your job is to return the middle character(s) of the string.

If the string's length is odd, return the middle character.
If the string's length is even, return the middle 2 characters.
Examples:
"test" --> "es"
"testing" --> "t"
"middle" --> "dd"
"A" --> "A"
 */


function midChars(str){
    let middleCharIndex = Math.floor(str.length / 2)
    return str.length % 2 === 0
            ? str[middleCharIndex - 1] + str[middleCharIndex]
            : str[middleCharIndex]
}
console.log(midChars('test'))
console.log(midChars('testing'))
