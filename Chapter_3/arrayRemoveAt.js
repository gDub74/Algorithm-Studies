//given an array and an index in the array remove the value at that index - only allowed method is pop().

function removeValueAt(arr, idx){
    //overwrite values from right of given index then pop last value
    for (var i= idx; i<arr.length ; i++){
        arr[i]= arr[i+1];
    }
    arr.pop();
    return arr;
}


console.log(removeValueAt([1,2,3,3,4,5], 3));

