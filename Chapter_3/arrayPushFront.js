//Given an array, insert an additional value at the begining of the array.


function pushFront(arr, value){
    var lastIdx = arr[arr.length-1];
    for (var i=(arr.length-1); i>0; i--){
        arr[i]= arr[i-1];
    }
    arr.push(lastIdx);
    arr[0]= value;
    return arr;
}

console.log(pushFront([1,2,3,4], 0));
console.log(pushFront([2,21,'hey!',94], 'push it up front!'));
