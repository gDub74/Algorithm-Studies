// Given arr and values min and max, retain only the array values between min and max. Work in-place: return the array you are given, with values in original order. No built-in array functions.

function filterRange(arr,min,max){
    //loop through the arr
    for (var i=0; i<arr.length; i++){
        if ((arr[i] < min) || (arr[i] > max)){  //set condition to run loop only if out of range
            for (var j=i; j<arr.length; j++){  //shift values left to position value that is out of range
                arr[j] = arr[j+1]; 
            }
            arr.pop(); //shorten arr by one after the shift
            i--; //here we set i back one index so that we can re-check the previous position now that we have done a shift.
        }
    }
    return arr;  
}



console.log(filterRange([-5,-4,-3,-2,-1,0,1,2,3,4,5], -3, 3))
console.log(filterRange([1,1,11, 99, 5, -55, 199 , 20001, -999, 12,23,44,85,116],-60, 120));
