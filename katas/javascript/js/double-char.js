
/*
Given a string, you have to return a string in which each character (case-sensitive) is repeated once.

Examples (Input -> Output):
* "String"      -> "SSttrriinngg"
* "Hello World" -> "HHeelllloo  WWoorrlldd"
* "1234!_ "     -> "11223344!!__  "
Good Luck!
 */


function doubleStr(str) {

    return  str
            .split('')
            .map(char => {return char.repeat(2)})
            .join('')
}



console.log(doubleStr('Hello World'));
