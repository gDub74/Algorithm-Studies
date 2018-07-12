// Given array, and indices start and end, remove vals in that index range, working in-place (hence shortening the array).  For example, removeVals([20,30,40,50,60,70],2,4) should return [20,30,70].

function removeVals(arr, startIndex, endIndex) {
    // check for user error that the start index should be less than or equal to the ending index
    if (startIndex > endIndex) {
        // swap
        const temp = startIndex;
        startIndex = endIndex;
        endIndex = temp;
    }

    let shortenArrBy = endIndex - startIndex + 1   // add one because it is inclusive


    // check to make sure the start and end indexes are in range
    if (startIndex < 0 || endIndex > arr.length - 1) {
        console.log('Indexes out of range.')
        return;
    };


    // now check ending index to see if its last of array
    if (endIndex === arr.length - 1) {
        arr.length -= shortenArrBy;
        return arr
    };


        
    // if we got past both conditionals then we need to do a left shift and shorten or some other method of removing the values
    let leftShiftOffset = endIndex;

    // left shif values from one past range to startIndex
    // i has to go untiil the offset reaches the last value in the aray
    for (let i = startIndex; i < arr.length - shortenArrBy; i++) {
        // left shift values
        arr[i] = arr[leftShiftOffset + 1];
        leftShiftOffset++;
    };

    arr.length -= shortenArrBy;
    return arr
}

console.log(removeVals([20,30,40,50,60,70, 80, 90],0,0));