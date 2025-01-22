/* 
Sum all the numbers of a given array ( cq. list ), except the highest and the lowest element ( by value, not by index! ).

The highest or lowest element respectively is a single element at each edge, even if there are more than one with the same value.

Mind the input validation.

Example
{ 6, 2, 1, 8, 10 } => 16
{ 1, 1, 11, 2, 3 } => 6
Input validation
If an empty value ( null, None, Nothing, nil etc. ) is given instead of an array, or the given array is an empty list or a list with only 1 element, return 0.

*/


//function(arr:int); Validation: 
// if empty return 0
// if null return 0
//if between smaller and bigger 1 element or no elements return 0

//sum array numbers EXCEPT max and min number in original array
//return that sum



function sumArray(array){
    if (!Array.isArray(array) || array.length <= 2) {return 0}

    let arraySlice = array.sort((a, b) => a-b).slice(1, -1);

    return arraySlice.reduce((a, b) => a + b, 0)
}

console.log(sumArray([ -6, -20, -1, -10, -12 ]));
