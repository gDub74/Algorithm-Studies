

// tests
var array1 = [1,3,1,5,1,3,-2]; //4
var array2 = [1,2,3,4,2,4]; //2 
var array3 = [5,4,3,2,1,2]; //1
var array4 = [3,2,1,3,4]; //3
var array6 = [4,3,2,1,2]; //1


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

function getRain(array){
    let totalBuckets = 0;
    //this helper function will calc each areas rainBucket units and add to total | we will call this function in findBuckets function
    function calcBuckets(width, height, buildingArea){
        if (width != 0){
            let area = width * height;
            let rainUnits  = area - buildingArea;
            totalBuckets += rainUnits;
            console.log('new Bucket -->> bucket height:', height, 'bucket width:', width, 'curr building area: ', buildingArea, 'total Buckets:', totalBuckets);
        }
    }
    
    //loop thru array and find low spot areas to send to getRain function
    // lowwBuildingArea will added to at each index if we are at a low spot
    function findBuckets(arr){
        console.log(arr);
        let currHighIndex;
        let nextHighIndex;
        let widthOfLows = 0;   
        let lowBuildingArea = 0
        
        
        function initalizeHighs(index1, index2){
            if (arr[index1] <= arr[index2]){
                // currHighIndex = index2;
                // nextHighIndex = index2;
                initalizeHighs(index2, index2+1);

            } else {
                currHighIndex = index1;
                nextHighIndex = index2;
            }

            if  (arr[nextHighIndex +1] < arr[nextHighIndex]){
                widthOfLows++;
                lowBuildingArea += arr[nextHighIndex];
                initalizeHighs(index1, index2 +1)
            }
            console.log('start: highIndex = ', currHighIndex, ', next highINdex = ', nextHighIndex);                
        }

        // setp highs for loop
        initalizeHighs(0,1);
    
        //loop thru 1 pass should find all low areas - start on index after initial nextHighIndex
        let i = nextHighIndex + 1;
        while (i < arr.length){
            //reinitalize the high points
            // initalizeHighs(currHighIndex, nextHighIndex);
            // check for low or high spots
            if (arr[i] <= arr[nextHighIndex]){  // potential low spot or water could flow off
                widthOfLows ++;
                lowBuildingArea += arr[i];
                console.log(i, currHighIndex, nextHighIndex);
                i++;
            } else { // found a new high spot --> set up and call calcBuckets
                //check against currHigh
                if (arr[i] > arr[currHighIndex]){
                    let temp = currHighIndex;
                    currHighIndex = i;
                    nextHighIndex = temp;
                } else {
                    nextHighIndex = i;
                }
                widthOfLows ++;
                lowBuildingArea += arr[i-1];

                if (i == arr.length-1 && arr[currHighIndex] > arr[i]){
                    lowBuildingArea = 0;
                    widthOfLows = 0;
                    nextHighIndex = i;
                    while (arr[currHighIndex] > arr[i]){
                        currHighIndex++;
                    }
                    i = currHighIndex;
                } else {
                    let currWidth = Math.abs(currHighIndex - nextHighIndex) - 1;
                    let bucketHight = arr[nextHighIndex];
                    console.log('here-->', 'i:', i, ', high Index:',currHighIndex, ', next high index:', nextHighIndex, 'widthOfLow:', widthOfLows, 'lowBuildingArea:', lowBuildingArea);
                    calcBuckets(widthOfLows, bucketHight, lowBuildingArea);  
                    // now reset high spot pointers to initalize potential new bucket
                    initalizeHighs(i, i+1)
                    i = nextHighIndex + 1;
                    widthOfLows = 0;
                    lowBuildingArea = 0;
                }

            }

        }
        // add any leftover buckets
    }
    //envoke findBuckets and send array to it
    findBuckets(array);
    console.log(totalBuckets);
    return totalBuckets;
}





// getRain(array1);
// getRain(array2);
// getRain(array3);
// getRain(array4);
// getRain(array6);



//go thru whole array and just find indexes of two highest indexs
//then do logic to determine that if there is water between them, you can calc area and buildings 
let highIndex = 0;
let nextHigh = 0;

function findHighs(array){
    let results = [];
    for (let i in array){
        if (array[i] > array[highIndex]){
            nextHigh = highIndex;
            highIndex = i;
        }
    }
    results.push(array[highIndex]);
    results.push(array[nextHigh]);
    console.log(array, highIndex, nextHigh)
    return results;
}


let highPoints = findHighs(array1);
console.log(`high points --> ${highPoints[0]} with a value of ${array1[highPoints[0]]} `);