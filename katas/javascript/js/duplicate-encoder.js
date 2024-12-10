
/*
The goal of this exercise is to convert a string to a new string where each character in the new string is "(" if that character appears only once in the original string, or ")" if that character appears more than once in the original string. Ignore capitalization when determining if a character is a duplicate.

Examples
"din"      =>  "((("
"recede"   =>  "()()()"
"Success"  =>  ")())())"
"(( @"     =>  "))(("
 */

function duplicateEncode(word) {
    let string = word.toLowerCase().split('');

    let charCountObj = string.reduce((acc, cur) => {
        acc[cur] = (acc[cur] || 0) + 1;
        return acc;
    }, {});

    let updatedStr = string.map(char => charCountObj[char] === 1 ? '(' : ')');
    return updatedStr.join('');
}



console.log(duplicateEncode('din'));
console.log(duplicateEncode('recede'));
console.log(duplicateEncode('Success'));
console.log(duplicateEncode("1XHxg11Hsgt(x(6(G(11"));