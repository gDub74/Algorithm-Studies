// Write a function that returns whether the given array has a balance point between indices, where one 
//side’s sum is equal to the other’s. Example: [1,2,3,4,10] → true (between indices 3 & 4), but [1,2,4,2,1] → false.


x = [1,2,3,4,10]
y = [1,2,4,2,1]

function balancePoint(arr){
    currIdx = 0; // var for keeping track of position
    sumBeforeIdx = 0;
    for (var i = 0; i < arr.length; i++){
        sumBeforeIdx += arr[i];
        //reset this for each pass at a new index
        var sumAfterIdx = 0;
        //add after currIdx
        for (var j = currIdx+1; j < arr.length; j++){
            sumAfterIdx += arr[j];
        }
        // compare
        if (sumBeforeIdx == sumAfterIdx){
            return true
        }
        //if last statment is false then this will run and loop back untill either the sumBefore and after are equal or the end of the array is reached
        currIdx ++;
    }
    return false
}


console.log(balancePoint(x));
console.log(balancePoint(y));

