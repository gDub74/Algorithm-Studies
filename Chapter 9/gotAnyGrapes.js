
// Martin loves grapes. He sees a number of baggies containing grapes, all in a row. Stephen tells him that he can take as many of the baggies as 
// he wants, as long as he doesn’t take two that are next to each other. Martin wants to maximize his number of grapes. Grapes are pretty healthy 
// so let’s help him out. Create a function to accept an array of non-negative integers representing number of grapes in each adjacent baggy.
//  Your function should return the maximum number of grapes he can obtain.


var grapes = [1,1,1,1,1,1,2,2,2,22,23,33,34,55,45,66,75,22,22,4]

//find the max sum of either odd or even indexed values
function rGrapeGrabber(arr, sumOdd = arr[0], sumEven = arr[1]){
    // if odd length array grab last value and shorten the array by one so we are now only dealing with even length arrays
    if (arr.length %2 == 1){
        sumOdd += arr[arr.length-1];
        arr.length -= 1;
    }
    if (arr.length > 2){
        return rGrapeGrabber(arr.splice(0, arr.length-2), sumOdd + arr[arr.length-2], sumEven + arr[arr.length-1]);
    }
    console.log('recursive: sumOdd:', sumOdd, 'sumEven:', sumEven);
    return sumOdd >= sumEven ? sumOdd : sumEven
}

//itteraativly add up even and odd indexed values and take larger 
function grapeGrabber(arr, sum1 = 0, sum2 = 0){
    for (let i = 0; i < arr.length; i++){
        i%2 == 0 ? sum1+=arr[i] : sum2+=arr[i]
    } 
    console.log( 'iterative: sumOdd', sum1, 'sumEven', sum2);
    return sum1 >= sum2 ? sum1 : sum2;
}

console.log(grapeGrabber(grapes), 'max grapes');
console.log(rGrapeGrabber(grapes), '-max grapes');


