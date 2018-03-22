


// find low points between high points
// get difference between low points and realitive lowest of the surrounding high points
//add to currBucket at each index that is a low spot.

//onec I encounter a highspot,  currBucket continues until you get to next highspot which is >= curr
//second pass go from end of arr backwords to the higest spot (MaxIdx) to grab any rain from that direction.


// function rainUnits(arr){
//     var total = 0;
//     var currBucket = 0;
//     var currHigh = arr[0];
//     var maxIdx = 0;

//     for (var i = 1; i < arr.length; i++){
//         if (arr[i] >= currHigh){
//             currHigh = arr[i];
//             total += currBucket;
//             currBucket = 0;
//             maxIdx = i;
//         }
//         currBucket += currHigh - arr[i];
//     }
//     //set up for reverse pass
//     currBucket = 0;
//     currHigh = arr[arr.length-1];
//     for (var i = arr.length-1; i >= maxIdx; i--){
//         if (arr[i] >= currHigh){
//             currHigh = arr[i];
//             total += currBucket;
//             currBucket = 0;
//         }
//         currBucket += currHigh - arr[i];
//     }
//     console.log(total);
//     return total; 
// }



//function looping(arr, currHigh, end=arr.length, start = 0, iter = 1)


// rainUnits(array1);
// rainUnits(array2);
// rainUnits(array3);
// rainUnits(array4);


// find two high points = get area by lower of two high points * width of points inbetween
// add up building area in this section
// subtract the building area from section area and you are left with rain buckets area for this section.

// function getRain(array){
//     let totalBuckets = 0;
//     //this helper function will calc each areas rainBucket units and add to total | we will call this function in findBuckets function
//     function calcBuckets(width, height, buildingArea){
//         if (width != 0){
//             let area = width * height;
//             let rainUnits  = area - buildingArea;
//             totalBuckets += rainUnits;
//             console.log('new Bucket -->> bucket height:', height, 'bucket width:', width, 'curr building area: ', buildingArea, 'total Buckets:', totalBuckets);
//         }
//     }
    
//     //loop thru array and find low spot areas to send to getRain function
//     // lowwBuildingArea will added to at each index if we are at a low spot
//     function findBuckets(arr){
//         console.log(arr);
//         let currHighIndex;
//         let nextHighIndex;
//         let widthOfLows = 0;   
//         let lowBuildingArea = 0
        
        
//         function initalizeHighs(index1, index2){
//             if (arr[index1] <= arr[index2]){
//                 // currHighIndex = index2;
//                 // nextHighIndex = index2;
//                 initalizeHighs(index2, index2+1);

//             } else {
//                 currHighIndex = index1;
//                 nextHighIndex = index2;
//             }

//             if  (arr[nextHighIndex +1] < arr[nextHighIndex]){
//                 widthOfLows++;
//                 lowBuildingArea += arr[nextHighIndex];
//                 initalizeHighs(index1, index2 +1)
//             }
//             console.log('start: highIndex = ', currHighIndex, ', next highINdex = ', nextHighIndex);                
//         }

//         // setp highs for loop
//         initalizeHighs(0,1);
    
//         //loop thru 1 pass should find all low areas - start on index after initial nextHighIndex
//         let i = nextHighIndex + 1;
//         while (i < arr.length){
//             //reinitalize the high points
//             // initalizeHighs(currHighIndex, nextHighIndex);
//             // check for low or high spots
//             if (arr[i] <= arr[nextHighIndex]){  // potential low spot or water could flow off
//                 widthOfLows ++;
//                 lowBuildingArea += arr[i];
//                 console.log(i, currHighIndex, nextHighIndex);
//                 i++;
//             } else { // found a new high spot --> set up and call calcBuckets
//                 //check against currHigh
//                 if (arr[i] > arr[currHighIndex]){
//                     let temp = currHighIndex;
//                     currHighIndex = i;
//                     nextHighIndex = temp;
//                 } else {
//                     nextHighIndex = i;
//                 }
//                 widthOfLows ++;
//                 lowBuildingArea += arr[i-1];

//                 if (i == arr.length-1 && arr[currHighIndex] > arr[i]){
//                     lowBuildingArea = 0;
//                     widthOfLows = 0;
//                     nextHighIndex = i;
//                     while (arr[currHighIndex] > arr[i]){
//                         currHighIndex++;
//                     }
//                     i = currHighIndex;
//                 } else {
//                     let currWidth = Math.abs(currHighIndex - nextHighIndex) - 1;
//                     let bucketHight = arr[nextHighIndex];
//                     console.log('here-->', 'i:', i, ', high Index:',currHighIndex, ', next high index:', nextHighIndex, 'widthOfLow:', widthOfLows, 'lowBuildingArea:', lowBuildingArea);
//                     calcBuckets(widthOfLows, bucketHight, lowBuildingArea);  
//                     // now reset high spot pointers to initalize potential new bucket
//                     initalizeHighs(i, i+1)
//                     i = nextHighIndex + 1;
//                     widthOfLows = 0;
//                     lowBuildingArea = 0;
//                 }

//             }

//         }
//         // add any leftover buckets
//     }
//     //envoke findBuckets and send array to it
//     findBuckets(array);
//     console.log(totalBuckets);
//     return totalBuckets;
// }





// getRain(array1);
// getRain(array2);
// getRain(array3);
// getRain(array4);
// getRain(array6);






// // if high2 > arr.length stop and don't calculate current bucket

// //find left edge of a box and set i to high1 and high2 both
// While (arr[i] <= arr[i+1]){
//     i++
// }
// // now high1 and 2 ore the same spot
// //move high2t pointer to bottom of box, right edge of bottom call this low maybe.. add buildinh hight at these indexs 
// while (high2 + 1 <= high2){
//     hight2 ++;
//     buildings += add[high2];
// }
// // now see how far up it goes? and keep adding the buildings --> make sure not to add in the building hight of final position oh high2
// while (high2+1 > high2){
//     high2++
//     buildings += arr[high2]
// }
// // now we have first high and second high so we need to move first high right while it is still above second height
// //  and subtract the buildings on those indexs
// while (high1 > high2){
//     high1++;
//     buildings -= arr[high1]
// }


// //now we have our first defined box
// width = high2-high1-1  
// currenRainArea = (width * height2) - buildingArea

// reset high1 to high2 and start again 
// if we never find a right edge dont add currRainarea to total

function getRainOnePass(arr, high1=0, high2=0, totalRain=0){
    // console.log(arr);
    //fast fail
    if (arr.length < 3){
        return totalRain;
    }

    //this is going to get reset for each recursive pass
    let buildingArea = 0;

    // find left edge of first box
    while (arr[high1] <= arr[high1+1]){
        // console.log(high1);
        high1++;
        // fast fail for if buildings just gets taller with no drop off
        if (high1 == arr.length-1){
            // console.log('no low spots -- up and away!')
            return totalRain;
        }
    }

    //set high2 to same as high 1
    high2 = high1;
    
    //find low right of current box add building area along the way
    while (arr[high2 + 1] <= arr[high2]){
        high2++;
        buildingArea += arr[high2];
        //fast fail for if it never goes back up
        if (high2 == arr.length-1){
            // console.log('rain running off, nothing to collect here, total rain:', totalRain);
            return totalRain;
        }
    }
    
    //now move right pointer up intil it is  taller than left high or you get to end of arr
    while (arr[high2] < arr[high1]){ 
        high2++;
        buildingArea += arr[high2];
        // if we fund the end of the array we need to break out and collect rain
        if (high2 == arr.length-1){
            // console.log('found end of buildings -- time to collect rain!');
            break;
        } 
    }
    // we actually dont want that last building because that is our new high 2 so lets subtract it
    buildingArea -= arr[high2];

    
    // here we need to check for one spacific condition that if we forget to check for the left pointer will move all the way over to the right.
    //checking for high2 in last position and to make sure you didn't have a drop off there...
    //this will move the left high back in the case that it reached the end of the array and there was a dropoff
    while (arr[high2] <= arr[high2-1]){
        //slide the pointer back because we had a drop off and havent collected the last bucket yet.
        high2--;
        buildingArea -= arr[high2];
    }

    // now we check to see if left side(+1) is higher than right and if so move left untill its next is = or lower , dont forget to subtract those buildings if we mover the left pointer over.
    while (arr[high1 +1] >= arr[high2]){
        buildingArea -= arr[high1 + 1];
        high1++;
    }
    
    // make a bucket
    let bucketHeight;
    // console.log(high1, high2);
    if (arr[high1] > arr[high2]){
        //check to make shure that this wasn't the very last building and it did a drop off...
        if (arr[high2] >= arr[high2-1]){
             bucketHeight = arr[high2];
        } else{
             bucketHeight = arr[high2-1];
        }
    } else {
         bucketHeight = arr[high1];
        // console.log(bucketHeight);
    }
     width = high2 - high1 - 1;
    // console.log ('width:', width, 'height:', bucketHeight)
    totalRain += (width * bucketHeight) - buildingArea;
    
    // console.log('high1:',high1, ' high2:', high2,' current building area:', buildingArea, 'total rain:', totalRain); 

    //now if high2 < arr.lenght lets recursivly call our function wiht the new starting positions both starting from high2
    if (high2 < arr.length-1){
        return getRainOnePass(arr, high2, high2, totalRain);
    }
    //otherwise we return the rain

    return totalRain;
}

var array1 = [1,2,3,3,3,1,5,1,3,-2]; //4
var array2 = [1,2,3,4,2,4]; //2 
var array3 = [5,4,3,2,1,2]; //1
var array4 = [3,2,1,3,4]; //3
var array5 = [4,3,2,1,2,3,4,5,4,3,2,1]; //9
var array6 = [1,2,3,4,5]; //0
var array7 = [1,2,3,4,3,2,1]; //0
var array8 = [4,3,2,1] //0;
var array9 = [3, 1, 2, 1, 3] //5
var array10 = [4,3,2,1,3,2,2,2,2,1] //1


console.log('total rain: ', getRainOnePass(array10));

// // tests
function testRainTerrace(func) {
    var tests = [
      {
        given: [3, 1, 1, 4, 2],
        expects: 4
      },
      {
        given: [1, 1, 1, 1, 1],
        expects: 0
      },
      {
        given: [],
        expects: 0
      },
      {
        given: [12, 1, 12, 1, 12],
        expects: 22
      },
      {
        given: [12, 11, 10, 9, 8],
        expects: 0
      },
      {
        given: [3, 1, 2, 1, 4, 2, 1],
        expects: 5
      },
      {
        given: [1, 2, 3, 4, 5, 6, 7, 8],
        expects: 0
      },
      {
        given: [8, 7, 6, 5, 4, 3, 2, 1],
        expects: 0
      }
    ];
    var result;
    for (var test of tests) {
      result = func(test.given);
      if (result === test.expects) {
        console.log("------------------------------------");
        console.log("SUCCESS", test.given, 'total rain:', test.expects);
      } else {
        console.log("------------------------------------");
        console.log("FAILURE", test.given);
        console.log("Expected: ", test.expects);
        console.log("Returned: ", result);
      }
    }
  }

  testRainTerrace(getRainOnePass);