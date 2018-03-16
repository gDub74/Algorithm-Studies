// Ever since her dad discovered universal truths about triangles, Sophia Pythagoras has loved square numbers. Given positive integer, successively print squares of integers up to that integer, first ascending odds, then descending evens. Solve recursively with no loops. Ex.: risingSquare(5) returns "1, 9, 25, 16, 4", risingSquare(8) returns "1, 9, 25, 49, 64, 36, 16, 4".



function recurSquares(num, oddSqrs = '', evenSqrs = ''){
    if (num >= 1){
        if (num*num % 2 == 1){
            oddSqrs = (num*num).toString() + ', ' + oddSqrs;
            return recurSquares(num -1, oddSqrs, evenSqrs);
        }
        if (num == 2){
            evenSqrs += (num*num).toString();
        } else {evenSqrs += (num*num).toString() + ', '};      
        return recurSquares(num -1, oddSqrs, evenSqrs);    
    }
    return oddSqrs + evenSqrs;
}
console.log(recurSquares(8));
