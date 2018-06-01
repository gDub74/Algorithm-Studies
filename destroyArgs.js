// You will be provided with an initial array (the first argument in the destroyer function), followed by one or more arguments. Remove all elements from the initial array that are of the same value as these arguments.



function destroyer(arr, ...args) {
    // Remove all the values in arr that are also in args
  
    if (args.length > 0) {
      for (let i = 0; i < args.length; i++){
        for (let j = 0; j < arr.length; j++) {
            if (args[i] === arr[j]) {
              // if you don'twant to use splice you could do another loop and do a shift to the left and then shorten arr by 1
              arr.splice(j, 1);
              // step j back one in case of repeat of the same value
              j--;
          }
        }
      }
    }
    console.log(arr);
    return arr;
  }
  
destroyer([1, 2, 3, 1, 2, 3], 2, 3);
destroyer([1, 2, 3, 5, 1, 2, 3], 2, 3);
destroyer([3, 5, 1, 2, 2], 2, 3, 5);