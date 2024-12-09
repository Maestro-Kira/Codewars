/*
Check to see if a string has the same amount of 'x's and 'o's. The method must return a boolean and be case insensitive. The string can contain any char.

Examples input/output:

XO("ooxx") => true
XO("xooxx") => false
XO("ooxXm") => true
XO("zpzpzpp") => true // when no 'x' and 'o' is present should return true
XO("zzoo") => false
 */


function check(str) {

    let string = str.toLowerCase().split('');

    if(!string.includes('o') && !string.includes('x')) {
        return true;
    }

    let res = string.reduce((acc, cur) => {
        if (cur === 'x' || cur === 'o') {
            acc[cur] = (acc[cur] || 0) + 1;
        }
        return acc;
    }, {})

    return res['o'] === res['x']
}



console.log(check('ooxx'))
