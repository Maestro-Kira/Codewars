/*
Clock shows h hours, m minutes and s seconds after midnight.

Your task is to write a function which returns the time since midnight in milliseconds.
h = 0
m = 1
s = 1

result = 61000
 */

function clockAfterMidnight(h, m, s) {
    if(h < 0 || h > 23) {
        return 'Hours not valid'
    } else if(m < 0 || m > 59) {
        return 'Minutes not valid'
    }
    else if(s < 0 || s > 59) {
        return 'Seconds not valid'
    }
    return (3600000 * h) + (60000 * m) + (1000 * s)
}

console.log(clockAfterMidnight(0,1,1))