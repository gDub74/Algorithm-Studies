// Recursive Fibonacci

// Write rFib(num) . Recursively compute and return num th Fibonacci value. As earlier, treat first two (num = 0, num = 1) Fibonacci vals as 0 and 1. Examples: rFib(2) = 1 (0+1); rFib(3) = 2 (1+1); rFib(4) = 3 (1+2); rFib(5) = 5 (2+3). rFib(3.65) = rFib(3) = 2 , rFib(-2) = rFib(0) =

// 0 .


function rFib(num, x=0, y=1){
    if(num) {
        return rFib(num-1, y, x+y )
    }
    return x;
}

console.log(rFib(10));