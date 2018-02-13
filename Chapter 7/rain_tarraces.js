

// tests
var array1 = [1,3,1,5,1,3,-2]; //4
var array2 = [1,2,3,4,2,4]; //2 
var array3 = [5,4,3,2,1,2]; //1
var array4 = [3,2,1,3,4]; //3


// find low points between high points
// get difference between low points and realitive lowest of the surrounding high points
// get width of low area by difference in indexs

//onec I encounter a highspot bucket continues until you get to next highspot which is >= curr



var arr = [3,1,3] //so width of low spot is one - or witdh of high spots is 3, height  of tarrce is always 2 here even if one of the sides got taller...


function rainUnits(arr){
    var total = 0;
    var currBucket = 0;
    var currHigh = arr[0];
    var maxIdx = 0;

    

    for (var i = 1; i < arr.length; i++){
        if (arr[i] >= currHigh){
            currHigh = arr[i];
            total += currBucket;
            currBucket = 0;
            maxIdx = i;
        }
        currBucket += currHigh - arr[i];
    }
    currBucket = 0;
    currHigh = arr[arr.length-1];
    for (var i = arr.length-1; i >= maxIdx; i--){
        if (arr[i] >= currHigh){
            currHigh = arr[i];
            total += currBucket;
            currBucket = 0;
        }
        currBucket += currHigh - arr[i];
    }
    console.log(total);
    return total; 
}

rainUnits(array1);
rainUnits(array2);
rainUnits(array3);
rainUnits(array4);


