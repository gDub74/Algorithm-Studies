//create an array shuffle function that randomizes the order of the elements in an array.


//test cases
x = ["lets",'mix','things','up','a','little']
y = [1,2,3,4,5,6,7,8,9]

function arrShuffler(arr){
    //lets loop as many times as arr length to make sure we get a good shuffle
    for (var i = 0; i < arr.length; i ++){
        //lets grab two indexes at random and then do a swap
        var idx1 = Math.floor(Math.random() * arr.length);
        var idx2 = Math.floor(Math.random() * arr.length);
       
        //if the random indexs are the same lets change 1
        if (idx1 = idx2){
            if (idx1 > 0){
                idx1 = 0;
            }
            else {
                idx1 = arr.length-1;
            }
        }
        //now lets do a swap of the random indexes
        var temp = arr[idx1];
        arr[idx1] = arr[idx2];
        arr[idx2] = temp;
    }

    return arr
}


console.log(arrShuffler(y));
console.log(arrShuffler(x));
