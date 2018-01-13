//pass an array containing strings only. replace each string with a number representing the value of the length of the previous index and return array.


function previousLengths(arr){
    for (var i = arr.length-1; i > 0; i--){
    // console.log(arr[i], 'is', arr[i].length, 'characters long');
    arr[i]= arr[i-1].length;
    }
    return arr;
}

var thisArr = previousLengths(['day','sun','night','moon']); //store the returned value of the function in thisArr variable.
console.log(thisArr)