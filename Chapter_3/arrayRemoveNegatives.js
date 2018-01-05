// Implement removeNegatives() that accepts an array, removes negative values, and returns the same array (not a copy),
// preserving non-negatives’ order. As always, do not use built-in array functions.

var x  = [2,-5,6,7,0,-10,-1,1000, -45,45]

//1. loop thru array
//2. check if value is negative
//3. if negative shift values from left to that index
//4. pop last value before start of next loop, or shorten arr.length by one index
//5. re-check current index since we just overwrote it

function removeNegatives(arr){
    for (var i = 0; i< arr.length; i++){
        if (arr[i]<0){   //conditional to check if negative
            for (var j = i; j< arr.length; j++){  //shift values to the left to overwrite negative value at this index
                arr[j] = arr[j+1];
            }
        } 
        else {
            continue; //we need this to bypass the next two lines of code incase the current value is not negative
        }
        arr.length--; //shorten length of array
        i --; //re-check current position since we just overwrote it with value from +1 index
    }
    return arr;
}

console.log(removeNegatives(x));
