// find the largest sum of the hourglass shape in a 2-d array 


function hourglassSum(arr) {
    let hrglassSums = []
    let result;
    let currSum;
    // find each hrglass sum and push to results if greater than current result
    // each hr glass will start at least 3 from end of array and 3 from bottom of array
    //first loop takes us to the end in the x direction
    for (let i = 0; i < arr.length - 2; i++) {
        // second loop to take us from each x position to the bottom in the y direction
        for (let j = 0; j < arr.length - 2; j++) {
            // sum up an hrglass and push to results if greater than current result
            currSum = arr[i][j] + arr[i][j+1] + arr[i][j+2] + arr[i + 1][j + 1] + arr[i+2][j] + arr[i+2][j+1] + arr[i+2][j+2];
            hrglassSums.push(currSum);
            if (!result && result !==0) {
                result = currSum;
            }
            if (currSum > result) {
                result = currSum;
            }
        }
    }   
    console.log(hrglassSums);
    return result;
    
    // find and return largest sum in results array 
}


const input = [[-1, 1, -1, 0, 0, 0], [0, -1, 0, 0, 0, 0], [-1, -1, -1, 0, 0, 0], [0, -9, 2, -4, -4, 0], [-7, 0, 0, -2, 0, 0,], [0, 0, -1, -2, -4, 0]]

console.log(hourglassSum(input));

