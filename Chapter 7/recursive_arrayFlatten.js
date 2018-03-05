

//working version 

// function arrFlatten(arr){
//     var flatArr = [];
//     var arrContainsArrs = false
//     for (var i = 0; i < arr.length; i++){
//         if (typeof(arr[i]) !== 'number'){
//             temp = arr[i];
//             var arrContainsArrs = true;
//             for (var j = 0; j<temp.length; j++){
//                 flatArr.push(temp[j]);
//             }
//             }else{
//             flatArr.push(arr[i]);   
//         }
//     }
//     if (arrContainsArrs == false){
//         return flatArr;
//     }
//     else{
//         return arrFlatten(flatArr);
//     }
// }

// scoped version with outer function to contain a global target to store flatened sections as you loop through
//  and recurse through the inner function

function flatz(inputArr){
    outputArr=[]
    function arrFlatten(arr){
        for (var i = 0; i < arr.length; i++){
            if (typeof(arr[i]) == 'number'){
                outputArr.push(arr[i]);
            }else{
                arrFlatten(arr[i]); 
            }
        }
        return outputArr;
    }
    return arrFlatten(inputArr);
}

// tests

var x= [[1,2,[3]],4];
var y = [1,[2,3,4,[5,6,7,[8],9],10],11]
var z = [0,[],[[],0]]


console.log(flatz(x));
console.log(flatz(y));
console.log(flatz(z));