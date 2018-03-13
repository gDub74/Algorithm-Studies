// Given a sorted array and a value, return whether the array contains that value. Do not sequentially iterate the array. Instead, ‘divide and conquer’, 
//taking advantage of the fact that the array is sorted. As always, only use built-in functions that you are prepared to recreate (write yourself) on demand!


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



// function binarySearch2(arr, val){
//     if (arr.length == 0){  //fast fail 
//         return false;
//     }
//     while (arr.length >= 1){
//         var checkerVal = arr[Math.floor(arr.length/2)];
//         if (checkerVal == val){
//             return true;
//         }
//         if (arr.length == 1){ 
//         return false;
//         }
//         if (checkerVal > val){ //slice second half off
//             arr = arr.slice(0, Math.floor(arr.length/2));
//         }
//         else{  //slice first half off
//             arr = arr.slice(Math.floor(arr.length/2));
//         }
//     }
// }


//keep track of left and right side of search indexs in array
//no .slice()

function binarySearch3(arr, val){
    var leftIdx = 0;
    var rightIdx = arr.length-1;
    //fast fail
    if (arr.length == 0){   
        return false;
    } 
    //special case where length of arr is 1
    if (arr.length == 1){  
        if (arr[0] == val){
            return true;
        }else {
            return false;        
        }
    }
    //divide and search till we find search val length of arr is 1
    while ((rightIdx - leftIdx) > 0){
        var checkerIdx = Math.floor((rightIdx - leftIdx)/2) + leftIdx;  //add the leftIdx to get the offset correct
        var checkerVal = arr[checkerIdx];
        if (checkerVal == val){
           return true;
        } 
        if (checkerVal < val){
            leftIdx = checkerIdx;
        }
        else{
            rightIdx = checkerIdx;
        }
        if ((rightIdx - leftIdx) == 1){ 
            if (arr[rightIdx] == val){
                return true;
            }
            // else{
            //   return false;  
            // }
        }  
    }
}

//test cases
var arr1 = [ 1,2,3,4,5,6,7,9,10,11,13,14,15,16,22,24,35,46,56,57,68,79,378,420,759,777,888,999,10000];
var arr2 = [];
var arr3 = [3,4];
var arr4 = [4,5];
var arr5 = [4]
var arr6 = [0]

var val1 = 4;


// console.log(binarySearch3(arr1,val1));
// console.log(arr1);
// console.log(binarySearch3(arr2,val1));
// console.log(arr2);
// console.log(binarySearch3(arr3,val1));
// console.log(arr3);
// console.log(binarySearch3(arr4,val1));
// console.log(arr4);
// console.log(binarySearch3(arr5,val1));
// console.log(arr5);
// console.log(binarySearch3(arr6,val1));
// console.log(arr6);


function rBinary(arr, val, left=0, right=arr.length){
    var mid = Math.floor((right-left)/2) + left; //don't forget to add the left offset
    if (arr[mid] === val){
        return true;
    }
    if ((right-left) <= 1 ){
        return false;
    }
    return (val > arr[mid]) ? rBinary(arr, val, mid, right) : rBinary(arr, val, left , mid);
}

console.log(binarySearch3(arr1, 420)); //true console.log(binarySearch3(arr6, 0)); //true
console.log(binarySearch3(arr2, 0)); //false
console.log(binarySearch3(arr6, 0)); //true
console.log(binarySearch3(arr2)); //true
console.log(binarySearch3(arr3, 4)); //true
console.log(binarySearch3(arr4, 4)); //true

