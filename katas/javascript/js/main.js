/*
Write a function that counts all vowels in a string
 */
function countVowels(str) {
    return str.split('')
        .filter((letter) =>
            (letter === 'a') ||
            (letter === 'e') ||
            (letter === 'i') ||
            (letter === 'o') ||
            (letter === 'u'))
        .length
}

console.log(countVowels('abracadabra'))