//reverse order of array without using a new array to store values


//plan:
//swap fisrt and last, then second and second to last ...


function arrayReverser(arr){
    //loop through to the middle of the array and swap curent index with arr length minus the index
    for (var i = 0; i < arr.length/2; i++){
        var temp = arr[i];
        arr[i] = arr[arr.length-1-i]; 
        arr[arr.length-1-i] = temp;
    }
    return arr;
}

console.log(arrayReverser([1,2,3,4,5,6,7]));
console.log(arrayReverser([1,2,3,4,5,6,7,8]));
console.log(arrayReverser(['reverse?', 'array', 'this', 'will']))