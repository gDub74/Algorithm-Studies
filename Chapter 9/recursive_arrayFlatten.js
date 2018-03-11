

// //working version 

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

//function to build an array with x number of levels deep of arrays, length you want array
function buildArray(depth, length){
    var arr = []
    var flag = false;
    var num = 1;
    arrAdd = []
    while (length){
        var random = Math.round(Math.random());
        if (random === 0){
            arrAdd.push(num);
            num++;
            flag = !flag;
        }
        else if (!flag && depth > 0){
            while (depth){
                //random # of indexs upto 9
                var subArr = [];
                var subArrLength = Math.floor(Math.random() * Math.floor(10));
                for (var i = 0; i<subArrLength; i++){
                    subArr.push(num);
                    num ++
                }
                arrAdd.push(subArr);
                depth--;
            }
            arr.push(arrAdd);
            num++;
            arrAdd = [];
            length--;
            flag = !flag;
            depth
        }
        else{
            arr.push(num);
            num++;
            length--;
            depth++;
        }
    }
    return arr;
}
// console.log(Math.floor(Math.random() * Math.floor(10)));

function recursiveFlat(arr, flatArr=[]){
    for (var i = 0; i< arr.length; i++){
        (typeof(arr[i]) == 'number') ? flatArr.push(arr[i]) : recursiveFlat(arr[i], flatArr);
    }
   return flatArr
}

//non recursivly
//
function flattenArr(arr){
    var targetArr = [];
    baseLevel = true;
    //loop through array if base level is true
    while (baseLevel){
        //loop thru arr and push values, flatte 1 level deep at a time
        for (var i = 0; i < arr.length; i++){
            if (typeof(arr[i]) !== 'number'){  
                //set base level to false
                baseLevel = false;
                // create a temp to hold the array that is in the index in question from the variable arr
                temp = arr[i];
                // push content of each index of tempArr to the target
                for (var j = 0; j<temp.length; j++){
                    targetArr.push(temp[j]);
                }
            }else{
                targetArr.push(arr[i]);   
            }
        }
        if (!baseLevel){
            //set up the next pass through the while loop
            arr = targetArr;
            targetArr = [];
            baseLevel = true;
        }else{
            return targetArr;
        }
    }   
}


// tests
var x= [0,[1,2,[3]],4];
var y = [1,[2,3,4,[5,6,7,[8],9],10],11]
var z = [0,[],[[],0]]

// console.log(x);
// // console.log(flatz(x));
// // console.log(rFlat(x));
var array1 = buildArray(10,100000);
console.log(array1);

var start = new Date();
start = start.getMilliseconds();
console.log(recursiveFlat(array1));
var end = new Date();
end = end.getMilliseconds();
console.log(end - start + "ms");


// console.log(flattenArr(y));


var start = new Date();
start = start.getMilliseconds();
console.log(flattenArr(array1));
var end = new Date();
end = end.getMilliseconds();
console.log(end - start + "ms");
