// Here, a balance point is on an index, not between indices. Return the balance index where sums are equal on either side (exclude its own value). 
// Return -1 if none exist. Ex.: [-2,5,7,0,3] → 2, but [9,9] → -1.


x = [-2,5,7,0,3];
y = [9,9];
z = [2,2,2,2,2,4]


function balanceIdx(arr){
    //start curr at 1 because we need to have at least one value before to do a check
    var currIdx = 1;
    var sumBefore = 0;
    //fast exit
    if (arr.length <=2){
        return -1;
    }
    for (var i = 0; i < arr.length; i++){
        sumBefore += arr[i];
        var sumAfter = 0;
        // add up values after currIdx (excluding curr value)
        for (var j = currIdx + 1; j< arr.length; j++){
            sumAfter += arr[j];
        }
        if (sumBefore == sumAfter){
            return currIdx;
        }
        //else keep looping until end above is either true or we get to end of array and then return -1
        currIdx ++;
    }
    return -1;
}

console.log(balanceIdx(x));
console.log(balanceIdx(y));
console.log(balanceIdx(z));