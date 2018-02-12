// Given a sorted array and a value, return whether the array contains that value. Do not sequentially iterate the array. Instead, ‘divide and conquer’, 
//taking advantage of the fact that the array is sorted. As always, only use built-in functions that you are prepared to recreate (write yourself) on demand!

var arr1 = [1,2,3,5,6,8,9];
var val1 = 10;

function binarySearch(arr, val){
    // check middle of arr val
    if (arr.length <= 2){
        if (arr[0] == val || arr[1] == val){
            return true;
        }else{
            return false;
        }
    }
    var checkerVal = arr[Math.floor(arr.length/2)];
    if (checkerVal == val){
        return true;
    }
    //else cut the array down to size by half that possible could contain
    if (checkerVal > val){
        arr.length -= Math.floor(arr.length/2);
        return (binarySearch(arr, val));
    } 
    if(checkerVal < val){
        //slice off first half of arr
        var smallerArr = arr.slice(Math.floor(arr.length/2));
        return binarySearch(smallerArr,val);
    } 
    {
        return false;
    }
}

console.log(binarySearch(arr1,val1));