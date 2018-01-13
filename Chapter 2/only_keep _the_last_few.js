//by directly decrementing an array's length, given a array 'arr' and a number 'x' 
//remove all excepth the last x elements and return arr shorter.



function arrShorter(arr, x){
    //for loop runing x number of times
    for (var i=0; i< x; i++){
        //move arr.length-x index values from end of array to beginning while not changing order, so shift left by that amount.
        arr[i]=arr[i+(arr.length-x)];
    }

    arr.length-=(arr.length-x);
    return arr;
}

console.log(arrShorter([1,2,3,4,5,6,7], 6));
