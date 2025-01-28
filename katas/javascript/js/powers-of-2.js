
/*

Description:
Complete the function that takes a non-negative integer n as input, and returns a list of all the powers of 2 with the exponent ranging from 0 to n ( inclusive ).

Examples
n = 0  ==> [1]        # [2^0]
n = 1  ==> [1, 2]     # [2^0, 2^1]
n = 2  ==> [1, 2, 4]  # [2^0, 2^1, 2^2]

 */


function powersOfTwo(n){
    let array = [];
    for (let index = 0; index <= n; index++) {
                array.push(index)
    }
    return array.map(num => Math.pow(2, num))
  }


  console.log(powersOfTwo(5));
  
