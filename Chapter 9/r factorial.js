// Recursive Factorial
// Given num, return the product of ints from 1 up to num. If less than zero, treat as zero. If not integer, truncate. Experts tell us 0! is 1. rFact(3) = 6 (1*2*3). Also, rFact(6) = 720 (1*2*3*4*5*6).



function factorial(num){
    var product = 1;
    if (num <= 0){
        return product;
    }
    else{
        while (num > 0){
            product *= num;
            num --;   
        }
    }
    return  product;
}

console.log(factorial(3)); // 6
console.log(factorial(4)); // 24
console.log(factorial(6)); // 720 


function rFactorial(num,  product = 1){
    function recursiveFactorial(num){
        while (num > 1){
            product *= num;
            return recursiveFactorial(num-1);
        }
    }
    // call the inner function
    recursiveFactorial(num);
    return product;
}




function rFact(num, product=1){
    if (num > 1){
        return rFact(num-1, product*num);
    }
    return product;
}

console.log(rFactorial(3)); // 6
console.log(rFactorial(4)); // 24
console.log(rFactorial(6)); // 720


console.log(rFact(3)); // 720
console.log(rFact(4)); // 720
console.log(rFact(6)); // 720

