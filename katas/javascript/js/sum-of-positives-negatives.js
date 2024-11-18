function countPositivesSumNegatives(input) {
    if (input === null || input.length === 0) {
        return [];
    }
    let positiveSum = 0;
    let negativeSum = 0;
    for (let num of input) {
        if (num >= 0) {
            positiveSum += num;
        } else {
            negativeSum += num;
        }
    }
    return [positiveSum, negativeSum];
}

console.log(countPositivesSumNegatives([3, 4, 5, -1,-2]));