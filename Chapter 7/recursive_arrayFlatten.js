

// //working version 

function arrFlatten(arr){
    var flatArr = [];
    var arrContainsArrs = false
    for (var i = 0; i < arr.length; i++){
        if (typeof(arr[i]) !== 'number'){
            temp = arr[i];
            var arrContainsArrs = true;
            for (var j = 0; j<temp.length; j++){
                flatArr.push(temp[j]);
            }
            }else{
            flatArr.push(arr[i]);   
        }
    }
    if (arrContainsArrs == false){
        return flatArr;
    }
    else{
        return arrFlatten(flatArr);
    }
}

// // scoped version with outer function to contain a target to store flatened sections as you loop through
// //  and recurse in the inner function

// function flatz(inputArr, outputArr=[]){
    
//     function arrFlatten(arr){
//         for (var i = 0; i < arr.length; i++){
//             if (typeof(arr[i]) === 'number'){
//                 outputArr.push(arr[i]);
//             }else{
//                 arrFlatten(arr[i]); 
//             }
//         }
//         return outputArr;
//     }
//     return arrFlatten(inputArr);
// }



function recursiveFlat(arr, flatArr=[]){
    for (var i = 0; i< arr.length; i++){
        if (typeof(arr[i]) == 'number'){
            flatArr.push(arr[i]);
        }
        else{
            recursiveFlat(arr[i], flatArr);
        }
    }
   return flatArr
}



// tests
var x= [0,[1,2,[3]],4];
var y = [1,[2,3,4,[5,6,7,[8],9],10],11]
var z = [0,[],[[],0]]

console.log(x);
// console.log(flatz(x));
// console.log(rFlat(x));


var start = new Date();
start = start.getMilliseconds();
console.log(recursiveFlat(y));
var end = new Date();
end = end.getMilliseconds();
console.log(end - start + "ms");


var start = new Date();
start = start.getMilliseconds();
console.log(arrFlatten(y));
var end = new Date();
end = end.getMilliseconds();
console.log(end - start + "ms");


