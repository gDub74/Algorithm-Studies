//reverse the values (in place) in a given array-same array not a new one.  so: [1,2,3,4,5] would return [5,4,3,2,1]


function arrReverser(arr){
    for (var i=0; i < arr.length/2; i++){
        temp = arr[i];
        arr[i]= arr[arr.length-1-i];
        arr[arr.length-1-i] = temp;
    }
    return arr;
}

var backwardsArr = arrReverser([1,2,-3,4,33,89,6,3,1, 0.7]);
console.log(backwardsArr)