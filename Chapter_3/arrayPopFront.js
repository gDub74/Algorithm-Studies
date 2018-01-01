//given an array, remove and return the shortened array and value at the begining of the array only using pop to shorten array length by 1.

function popFirst(arr){
    var first = arr[0];
    for (var i = 0; i< arr.length; i++){
        arr[i] = arr[i+1];
    }
    arr.pop();
    return `The value at the first index was: ${first}, now the array is: ${arr}`;
}

console.log(popFirst([2,4,6,8,10]));
