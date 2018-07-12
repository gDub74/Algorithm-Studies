function newFlatCity(arr){
    let tempArr = [];
    for (let i = 0; i < arr.length; i++){
        //remove if empty []
        if (arr[i].length == 0){
            // shift left to that point to cover it up then decrement length of arr
            for (let x = i; x < arr.length; x++){
                arr[x]= arr[x+1];
            }
            arr.length--;
        }
        //now look for nested arrs
        if (Array.isArray(arr[i])){
             //build tempArr with values of the array of the current index
            for (let j in arr[i]){
                tempArr.push(arr[i][j]);
                // console.log(tempArr);
            }
            //shift right to end starting at prev last down to 1 before 
            for (let k = arr.length-1; k > i; k--){
                arr[tempArr.length-1+k] = arr[k];
            }
            //insert values into arr from tempArr 
            for (let l = 0; l < tempArr.length; l++){
                arr[i+l] = tempArr[l];
            }
            // reset tempArr and set i back one to recheck from where you were in case the first value you pushed was an array
            tempArr = [];
            i--;
        } 
    }
    return arr;
}

[0,1,2,3,4,5, , , ]
ar1 = [0, [1,2,[3],4], [], 5, [6]];
ar2 = [[[[[[[[]]]]]]]];
test = [1, [[[2, 3], 4], [1, 2, 3]], 4, []];
test2 = [1];
// console.log(newFlatCity(ar1),'----');
// console.log(newFlatCity(ar2),'----');
// console.log(newFlatCity(test),'----');
// console.log(newFlatCity(test2),'----');


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





// probably should add some safeguards against typew not being an array or a number. also should be modified to accept strings.  
function recursiveFlat(arr, flatArr=[]){
    for (var i = 0; i< arr.length; i++){
        typeof(arr[i]) == 'number' ? flatArr.push(arr[i]) : recursiveFlat(arr[i], flatArr);
    }
    return flatArr
}



var x= [0,[1,2,[3]],4];
console.log(recursiveFlat(x));
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
var y = [1,[2,3,4,[5,6,7,[8],9],10],11]
var z = [0,[],[[],0]]

// console.log(flattenArr(y));
// console.log(newFlatCity(y),'----');

// console.log(x);
// // console.log(flatz(x));
// // console.log(rFlat(x));
// var array1 = buildArray(10,100000);



// var start2= new Date();
// start2= start2.getMilliseconds();
// recursiveFlat(array2);
// var end2 = new Date();
// end2 = end2.getMilliseconds();
// console.log(end2 - start2+ "ms");
// // console.log(flattenArr(y));
// var start = new Date();
// start = start.getMilliseconds();
// flattenArr(array2);
// var end = new Date();
// end = end.getMilliseconds();
// console.log(end - start + "ms");
                                                
                                                
                                                
                                                
                                                
                                                
                                                
                                                