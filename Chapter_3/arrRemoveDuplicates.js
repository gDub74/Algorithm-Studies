// Given a sorted array, remove any duplicates

function dupRemover(arr){
    for (var i=0; i<arr.length; i++){
          if (arr[i] == arr[i+1]){  //conditional to check if there is a duplicate in the next index im the array
              for (var j=i; j<arr.length; j++){  //inner loog does a shift all all values left to current index from outer loop
                  arr[j]=arr[j+1];
              }
              arr.pop(); 
              i--; //set index count back one incase there are more duplicates than just one 
          }      
    }
    return arr;
}


//console.log(dupRemover([1,2,2,2,3,]));
console.log(dupRemover([1,2,2,2,2,2,2,2,3,3,3,3,4,4,4,4,4,5,6,7,7,7]));


