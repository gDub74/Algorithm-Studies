

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
        typeof(arr[i]) == 'number' ? flatArr.push(arr[i]) : recursiveFlat(arr[i], flatArr);
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
// var array1 = buildArray(10,100000);
var array2 = [ [ [ 1, 2, 3, 4, 5, 6, 7, 8 ],
[ 9, 10, 11, 12, 13, 14, 15 ],
[ 16, 17, 18, 19, 20 ],
[ 21, 22 ],
[ 23, 24, 25, 26, 27, 28, 29 ],
[ 30 ],
[ 31, 32, 33, 34 ],
[ 35, 36, 37, 38, 39, 40, 41, 42, 43 ],
[],
[ 44, 45 ] ],
50,
[ 47, 48, 49, [] ],
52,
[ 53, [ 54, 55, 56, 57 ] ],
60,
[ 59, [ 61, 62, 63, 64 ] ],
68,
[ 66, 67, 69, [ 70, 71, 72, 73, 74, 75, 76, 77, 78 ] ],
81,
[ 80, 82, 83, [ 84, 85, 86, 87, 88 ] ],
90,
93,
[ 91,
92,
94,
[ 95, 96, 97, 98, 99, 100 ],
[ 101, 102, 103, 104, 105, 106, 107, 108 ] ],
111,
115,
[ 110, 112, 113, 114, 116, [ 117 ], [ 118, 119, 120 ] ],
123,
125,
126,
127,
130,
131,
132,
[ 122,
124,
128,
129,
133,
[ 134, 135, 136, 137, 138 ],
[ 139, 140, 141, 142, 143, 144, 145 ],
[],
[],
[ 146 ],
[ 147, 148, 149, 150, 151, 152, 153, 154 ],
[ 155 ] ],
157,
[ 158, [ 159, 160, 161, 162, 163 ] ],
165,
170,
171,
[ 166,
167,
168,
169,
172,
[ 173, 174, 175, 176, 177 ],
[ 178, 179 ],
[ 180, 181, 182, 183 ] ],
186,
[ 185, 187, 188, [ 189, 190, 191, 192, 193, 194 ] ],
198,
199,
200,
203,
204,
205,
206,
[ 196,
197,
201,
202,
207,
208,
209,
[ 210, 211, 212, 213, 214, 215, 216, 217 ],
[ 218, 219, 220 ],
[ 221, 222, 223, 224 ],
[ 225, 226, 227, 228, 229, 230, 231, 232, 233 ],
[ 234, 235, 236, 237, 238, 239, 240 ],
[ 241, 242, 243, 244, 245 ],
[ 246, 247, 248, 249, 250, 251, 252 ] ],
255,
257,
260,
261,
[ 254,
256,
258,
259,
262,
263,
264,
[ 265, 266, 267, 268, 269, 270, 271, 272 ],
[ 273, 274, 275, 276, 277 ],
[ 278, 279, 280 ],
[ 281 ] ],
283,
284,
285,
286,
291,
292,
[ 287,
288,
289,
290,
293,
[ 294, 295, 296, 297 ],
[ 298 ],
[ 299 ],
[ 300, 301, 302, 303, 304, 305 ],
[ 306, 307, 308, 309 ],
[ 310, 311, 312, 313, 314, 315, 316, 317 ] ],
319,
[ 320, [ 321, 322, 323, 324, 325, 326 ] ],
328,
329,
330,
331,
332,
333,
334,
337,
[ 335,
336,
338,
339,
340,
341,
342,
[ 343, 344 ],
[ 345, 346, 347, 348, 349, 350, 351, 352 ],
[ 353, 354, 355, 356, 357, 358 ],
[ 359, 360, 361, 362, 363, 364, 365, 366 ],
[ 367, 368, 369, 370 ],
[ 371, 372 ],
[ 373, 374, 375, 376 ],
[ 377, 378, 379, 380, 381, 382, 383 ] ],
387,
388,
389,
390,
395,
396,
[ 385,
386,
391,
392,
393,
394,
397,
[ 398 ],
[ 399, 400, 401 ],
[ 402, 403, 404, 405 ],
[ 406, 407 ],
[ 408, 409, 410, 411, 412, 413 ],
[ 414, 415, 416, 417, 418, 419 ] ],
423,
424,
[ 421,
422,
425,
[ 426, 427, 428, 429, 430, 431 ],
[ 432, 433, 434, 435, 436, 437 ] ],
444,
[ 439, 440, 441, 442, 443, [] ],
446,
[ 447, 448, 449, 450, 451, [ 452, 453, 454, 455, 456, 457 ] ],
459,
460,
463,
464,
471,
474,
[ 461,
462,
465,
466,
467,
468,
469,
470,
472,
473,
475,
[ 476 ],
[ 477 ],
[ 478, 479, 480 ],
[ 481, 482, 483, 484, 485, 486 ],
[ 487 ],
[ 488, 489, 490, 491, 492, 493 ] ],
497,
498,
499,
[ 495,
496,
500,
[ 501, 502, 503, 504, 505, 506, 507, 508, 509 ],
[ 510, 511, 512, 513 ],
[ 514, 515, 516, 517 ] ],
519,
520,
525,
528,
529,
530,
531,
532,
533,
534,
535,]


var start2= new Date();
start2= start2.getMilliseconds();
recursiveFlat(array2);
var end2 = new Date();
end2 = end2.getMilliseconds();
console.log(end2 - start2+ "ms");

// console.log(flattenArr(y));
var start = new Date();
start = start.getMilliseconds();
flattenArr(array2);
var end = new Date();
end = end.getMilliseconds();
console.log(end - start + "ms");







