//convert an array so that each of the elements gets repeated.
//so [1,2,3]==>[1,1,2,2,3,3]

//loop thru array and add 1 to length each time, then shift right fro that index 

function elementDoubler(arr){
    arr.length += arr.length;  //double the length of the array to start
    console.log(arr);
    //loop thru array and shift values to right, everytime thru outter loop add 2 to index so that you skip the value you just overwrote
    for (var i = 0; i < arr.length; i +=2){
        for (var j = arr.length-1; j>i; j --){
           arr[j]= arr[j-1];
           console.log(arr);
        }
        console.log('outer loop')
    }
    return arr;
}

console.log(elementDoubler([1,2,3]));
console.log(elementDoubler(['one','two','three','four']));
console.log(elementDoubler([false, true, null, undefined]))

// [1,2,3, , , ] 