// Speros walks the stairs at the Dojo multiple times every day. Often he takes 2 stairs at a time, to work his quadriceps; he’s just that way. Other days he mixes it up: with every footstep, he randomly chooses to take 1 stair or 2. You are given an integer representing the total number of stairs. Determine all ways to walk the stairs. Given 4, return [[1,1,1,1], [1,1,2], [1,2,1], [2,1,1], [2,2]]. Solve recursively with no loops. And don’t forget to get yourself some exercise during the bootcamp, as well.
//  
// Second: assuming you always start with a left foot, return only those ways that end with a right step. So, given 4, you should return [[1,1,1,1], [2,2]].


//return an array of arrays of all the possible combinations of 1's and 2's of a given number, num2's will help us end our recursion
// function binaryConbinations(num, arrBuilderIndex=1, numTwos=Math.floor(num/2), arr=[]) {
//     if (numTwos == 0) { 
//         //maybe add the final array if its a odd starting number 
//         return arr;
//     }
//     //build the 1's
//     if (!arr[0]){
//         arr[0] = [];
//         for (let i = num; i > 0; i--){
//             arr[0].push(1);
//         }
//     }
//     //build 1's and 2's and push
//     let currArr = [];
//     for (let count = 0; count < num; count++){
//         let 
//     }
//     arr.push(currArr);


//     // binaryConbinations(num, ++arrBuilderIndex, --numTwos, arr)
//     console.log(arr);
//     console.log(numTwos);
// }

// binaryConbinations(3);

function climbingStairs(numStairs, totalStairs = numStairs, results=[], currArr=[], currArrSum = 0){
    if (!numStairs){
        results.push(currArr)
        return results;
    }
    if (currArrSum < totalStairs){
        currArr.push(1);
    }
    // return climbingStairs(numStairs -1, totalStairs, results, [], 0)
    return climbingStairs(numStairs-1, totalStairs, results, currArr,  currArrSum+1)
}

console.log(climbingStairs(4));
