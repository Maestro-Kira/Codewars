//Write a function that removes the spaces from the string, then return the resultant string.
function noSpace(x){
    return x.trim().split(' ').join('')
}


console.log(noSpace('    Bla  a Kont ffg ff      '))