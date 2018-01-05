// Create a standalone function that accepts two arrays. Return a new array containing the first array’s elements,
// followed by the second array’s elements. Do not alter the original arrays. Ex.: arrConcat( ['a','b'], [1,2] ) should 
// return new array ['a','b',1,2].

//set some test case variables
x = [1,2,true]
y = ['a','b',3,false]


function concaterizer(arr1,arr2){
    //loop thru elements in arr 2 and push to arr1
    for (var i = 0; i< arr2.length; i++){
        console.log(arr2[i]);
        arr1.push(arr2[i]);
    }

    return arr1;
}

console.log(concaterizer(x,y));


