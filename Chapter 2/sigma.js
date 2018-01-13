//return from the function sigma(num) should be the sum of all the integers from 1 up to (inclusive) the var num 
// so sigma(3) = 6 (or 1+2+3)


function sigma(num){
    var sum = 0;
    for (var i = 1; i <= num; i++){
        //console.log(i);
        sum += i;
    }
    return sum;
}


console.log(sigma(10));
