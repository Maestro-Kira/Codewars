/*
An isogram is a word that has no repeating letters, consecutive or non-consecutive. Implement a function that determines whether a string that contains only letters is an isogram. Assume the empty string is an isogram. Ignore letter case.

Example: (Input --> Output)

"Dermatoglyphics" --> true
"aba" --> false
"moOse" --> false (ignore letter case)
 */

function isIsogram(str){

    let res = str.toLowerCase().split('').reduce((acc, cur) => {
        acc[cur] = (acc[cur] || 0) + 1
        return acc
    }, {})

    for (const resKey in res) {
        if(res[resKey] > 1){
            return false
        }
    }
    return true
}


console.log(isIsogram('Dermatoglyphics'))
console.log(isIsogram('aab'))
console.log(isIsogram('aAb'))



