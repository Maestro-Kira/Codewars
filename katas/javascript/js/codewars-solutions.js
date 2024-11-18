
function reverse(int) {
    let result = int
        .toString()
        .split('')
        .map(Number)
        .sort((a, b) => b - a)
        .join('')
    return +result;
}


console.log(reverse(42145))
