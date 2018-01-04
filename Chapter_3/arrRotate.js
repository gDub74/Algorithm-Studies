// given an array and an offset value, shift values in array to the right by the ofset. Wrap-around any values that 
//shift off the end of the array so that data is not lost. Allow negative shift by shift left not right if negative 
//offset value is passed


function offsetArray(arr, shiftBy){
    //conditional to see if we shift left or right
    if (shiftBy >= 0){
        //outer loop to check how if we need to keep shifting
        while (shiftBy > 0){
            temp = arr[arr.length-1]; // grab last value to be wrapped back around
            //inner loop to do one shift and wrap last value to first position in array- loop thru backwards.
            for (var i = arr.length-1; i>0; i--){
                arr[i] = arr[i-1]; //shift values right
            }
            arr[0] = temp; //set first value in array to what was the last
            shiftBy --; 
        }
    }
    else if (shiftBy < 0){
        while (shiftBy < 0){
            temp = arr[0]; //grab first value in array which will wrap arround to th last at end of loop
            for (var i = 0; i < arr.length; i++){
                arr[i] = arr[i+1]; //shift values left 1 index
            }
            arr[arr.length-1]= temp; //wrap first to last
            shiftBy ++; 
        } 
    }
    return arr;
}

console.log(offsetArray([1,2,3],-1)); //shifts 1 to left
console.log(offsetArray(['this','is',true,'?','hello-'],1)); //shifts 1 to righjt
console.log(offsetArray([11,-222,false,34,43,55,66,77,88,99,101010, -55],6)); //shiftes 6 to right
console.log(offsetArray([1,2,3,4,5],-2)); //shifts 2 to left
console.log(offsetArray([1,2,3,4,5],0)); //no shift
console.log(offsetArray([1,2,3,4,5])); //no shift






