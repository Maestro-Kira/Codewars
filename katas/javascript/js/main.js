/*
Your task is to create a function that does four basic mathematical operations.
The function should take three arguments - operation(string/char), value1(number), value2(number).
The function should return result of numbers after applying the chosen operation.
Examples(Operator, value1, value2) --> output
('+', 4, 7) --> 11
('-', 15, 18) --> -3
('*', 5, 5) --> 25
('/', 49, 7) --> 7
 */
function calculate(operator, num1, num2) {
    return (operator === '+') ? num1 + num2 :
           (operator === '*') ? num1 * num2 :
           (operator === '/') ? num1 / num2 :
           (operator === '-') ? num1 - num2 :
           null
}
console.log(calculate('-', 2,8))
console.log(calculate('+', 2,8))
console.log(calculate('*', 2,8))
console.log(calculate('/', 8,2))