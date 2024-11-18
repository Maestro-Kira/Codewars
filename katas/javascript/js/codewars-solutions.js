function countBy(x, n) {
    let z = [];
    for ( let i = 1; i <= n; i++){
        let result = i * x
        z.push(result)
    }
    return z;
}

console.log(countBy(1, 10))
console.log(countBy(2, 5))