// Given a sorted array and a value, return whether the array contains that value. Do not sequentially iterate the array. Instead, ‘divide and conquer’, 
//taking advantage of the fact that the array is sorted. As always, only use built-in functions that you are prepared to recreate (write yourself) on demand!


//test cases
var arr1 = [ 1,2,3,5,6,7,9];
var arr2 = [];
var arr3 = [3,4];
var arr4 = [4,5];
var arr5 = [4]

var val1 = 4;

// function binarySearch(arr, val){
//     if (arr.length == 0){  //fast fail 
//         return false;
//     }
//     var checkerVal = arr[Math.floor(arr.length/2)];
//     if (checkerVal == val){
//         return true;
//     }
//     if (arr.length == 1){ 
//        return false;
//     }
//     if (checkerVal > val){ //slice second half off
//         var smallerArr = arr.slice(0, Math.floor(arr.length/2));
//     }
//     else{  //slice first half off
//         var smallerArr = arr.slice(Math.floor(arr.length/2));
//     }
//     return binarySearch(smallerArr,val);
// }



function binarySearch2(arr, val){
    if (arr.length == 0){  //fast fail 
        return false;
    }
    while (arr.length >= 1){
        var checkerVal = arr[Math.floor(arr.length/2)];
        if (checkerVal == val){
            return true;
        }
        if (arr.length == 1){ 
        return false;
        }
        if (checkerVal > val){ //slice second half off
            arr = arr.slice(0, Math.floor(arr.length/2));
        }
        else{  //slice first half off
            arr = arr.slice(Math.floor(arr.length/2));
        }
    }
}







console.log(binarySearch2(arr1,val1));
console.log('original array not modified:', arr1);
console.log(binarySearch2(arr2,val1));
console.log('original array not modified:', arr2);
console.log(binarySearch2(arr3,val1));
console.log('orig;inal array not modified:', arr3);
console.log(binarySearch2(arr4,val1));
console.log('orig;inal array not modified:', arr4);
console.log(binarySearch2(arr5,val1));
console.log('original array not modified:', arr5);