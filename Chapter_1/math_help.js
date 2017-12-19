//given two numbers - coeffecients M and B in the equation Y = MX + B. 
// Build a function to return x-intercept : the value of X where Y = 0.


function xIntercept(M, B){
    var y = 0;
    var x = (y-B)/M;
    return(x);
}

console.log(xIntercept(-5,-5));
console.log(xIntercept(-5,10));
console.log(xIntercept(1,6));
console.log(xIntercept(10,-4));
console.log(xIntercept(3,22));


