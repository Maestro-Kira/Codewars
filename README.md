# Codewars Solutions

Welcome to my collection of solutions to Codewars katas! This repository is organized to showcase my problem-solving skills and coding proficiency. Each solution is saved individually and grouped by programming language.

## Repository Structure
`/javascript/js`: Contains all JavaScript solutions.

## How to Navigate
1. Choose a folder for the programming language you're interested in.
2. Open the corresponding file to view the kata description and my solution.

## Example
### File: `is-square-number.js`
#### Kata Title: "Check if a Number is a Perfect Square"
#### Description:
Given an integer, determine whether it is a perfect square.

#### Solution:
```javascript
let isSquare = function (n) {
  if (n < 0) return false;
  return Number.isInteger(Math.sqrt(n));
};
