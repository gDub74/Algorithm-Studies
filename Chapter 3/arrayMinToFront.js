//given an array of numbers move the minimum value to the first position in the array without changing the order of the rest.
//[4,3,1,2] returns [1,4,3,2]


//Plan of attack:
//find lowest value and place in temp, also keep track of what index it is in
//shift values right upto that index
//set first index to temp


function minFirst(arr){
    var lowest = arr[0];
    var lowIdx = 0;

    //find lowest value and index 
    for (var i= 1; i< arr.length; i++){
        if (arr[i] < lowest){
            lowest = arr[i];
            lowIdx = i;
        }
    }

    //shift right to that index
    for (var j=lowIdx; j >0 ; j--){
        arr[j] = arr[j-1];
    }

    //set first index to lowest value
    arr[0] = lowest;
    return arr;
}

console.log(minFirst([4,3,1,2,5]));
console.log(minFirst([41,23,11,112,5]));
console.log(minFirst([400,3,12,2,599]));
