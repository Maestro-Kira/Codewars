/*
Write a function to convert a name into initials. This kata strictly takes two words with one space in between them.

The output should be two capital letters with a dot separating them.

It should look like this:

Sam Harris => S.H

patrick feeney => P.F
 */


function abbreviateName(str) {
    return  str.split(' ').map(word => word[0].toUpperCase()).join('.');
}

console.log(abbreviateName('Jack London'));
console.log(abbreviateName('patrick feeney'));