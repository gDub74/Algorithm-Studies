// Recursive Sigma
// Write a recursive function that given a number returns sum of integers from 1 to that number. Example: rSigma(5) = 15 (1+2+3+4+5); rSigma(2.5) = 3 (1+2); rSigma(-1) = 0.
 

function Sigma(num){
    var sum = 0;
    counter = 1;
    for (var i = 0; i < num; i++){ 
        sum += counter;
        counter ++;
    }
    return sum;
}

console.log(Sigma(299));


// let sum = 0;

// function recursiveSigma(num){
//     if (num > 1){
//         // console.log(num, sum);
//         sum += num;
//         return recursiveSigma(num - 1);
//     }
// }


// 
function rSigma(num, sum=0){
    if (num > 0){
        // console.log(num, sum);
        return rSigma(num-1, sum+num);
    }
     return sum;
}

console.log(rSigma(299));
// console.log(recursiveSigma(3));