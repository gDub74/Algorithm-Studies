//swap pairs of values in given array so [1,2,3,4] ends up [2,1,4,3]. If the arr length is odd leave last value alone.

function pairSwapper(arr){

    for (var i=0; i< arr.length-1; i+=2){
        var temp = arr[i];
        arr[i]= arr[i+1];
        arr[i+1]= temp;
    }
    return arr;
}

console.log(pairSwapper([1,2,3,4]));
console.log(pairSwapper([1,2,3,4,5]));
console.log(pairSwapper([1,'hey','hey!',4]));
console.log(pairSwapper([1,2,3,4,5,6,7,8,9]));
console.log(pairSwapper(['is','this','work','going to', 'hope', 'I', 'so']));

