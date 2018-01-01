//given an array, index and additional value, insert the value into array at given index.

function insertAt(arr, idx, value){
    // grab the last value in the array so we can push it after the loop
    var last = arr[arr.length-1];
    
    //move thru arr backwords and shft everything over from the given idx to make a spot for new value
    for (var i = arr.length-1; i>= idx; i--){
        arr[i]= arr[i-1];
    }
    arr.push(last);
    arr[idx] = value;//overrite value into given index in array
    return arr;
}

console.log(insertAt([1,2,3,4], 1, 42));
console.log(insertAt([1,2,3,4,5,6,7,8,9], 3, 'hello'));
console.log(insertAt([1,2,3,4], 0, 'zero'));
console.log(insertAt([1,2,3,'four',5], 3, 'hey!'));
console.log(insertAt([1,2,3], 0, 'hey!'));
