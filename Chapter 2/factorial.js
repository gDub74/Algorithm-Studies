//function that multiplies all positive integers from 1 up to and including inputed number
//so factorial(3) would = 6 (or 1*2*3)


function factorial(num){
    var fact = 1;
    for (var i = 1; i <= num; i++){
        fact *= i;
        console.log(i,fact);
    }
    return fact;
}

console.log(factorial(10));

