/*
Welcome.

In this kata you are required to, given a string, replace every letter with its position in the alphabet.

If anything in the text isn't a letter, ignore it and don't return it.

"a" = 1, "b" = 2, etc.
 */

function alphabetPosition(text) {

    let alphabetObj = {};
    for (let i = 97; i <= 122; i++) {
        alphabetObj[String.fromCharCode(i)] = i - 96;
    }

    let filteredStr = text.toLowerCase().split('')
        .filter(x => x.match(/[a-z]/))
        .map(letter => alphabetObj[letter]);

    return filteredStr.join(' ');
}

console.log(alphabetPosition('The sunset sets at twelve o\' clock.'));
console.log(alphabetPosition('"The narwhal bacons at midnight."'));